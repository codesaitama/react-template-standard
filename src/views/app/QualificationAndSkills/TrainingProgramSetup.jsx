import React, { useState, useEffect } from "react";
import PageTitle from "components/common/PageTitle";
import { connect } from "react-redux";
//import LeftPanel from "components/contact/LeftPanel";
import ContactListComponent from "components/contact/ContactList";
import ContactWrapper from "components/contact/contact.style";
import { contactList } from "util/data/contacts";
import { remove, findIndex, filter } from "lodash";
import ContactForm from "components/contact/ContactForm";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "components/button/Button";

const TrainingProgramSetup = props => {
  const [panel, setPanel] = useState("all");
  const [contactlists, setContactlists] = useState(null);
  const [filteredContactlists, setFilteredContactlists] = useState(null);
  const [selected, setSelectedValue] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [contactModel, setContactModel] = useState(false);
  const [currentModelAction, setCurrentModelAction] = useState("add");

  useEffect(() => {
    setContactlists(contactList);
    setFilteredContactlists(contactList);
  }, []);

  const contactToggleModel = () => {
    setContactModel(!contactModel);
  };

  const activePanel = panel => {
    setPanel(panel);
    if (panel === "all") {
      setFilteredContactlists(contactlists);
    } else if (panel === "frequently") {
      const filtered = filter(contactlists, x => x.isfrequent === true);
      setFilteredContactlists(filtered);
    } else if (panel === "favorite") {
      const filtered = filter(contactlists, x => x.isfav === true);
      setFilteredContactlists(filtered);
    }
  };

  const selectValue = async id => {
    const selectedTem = selected ? selected : [];
    if (selectedTem.includes(Number(id))) {
      let index = selectedTem.indexOf(Number(id));
      if (index > -1) {
        selectedTem.splice(index, 1);
      }
      await setSelectedValue(null);
      await setSelectedValue(selectedTem);
    } else {
      selectedTem.push(Number(id));
      await setSelectedValue(null);
      await setSelectedValue(selectedTem);
    }
  };

  const actiononContact = async (action, e = null) => {
    if (action === "add") {
      setCurrentModelAction("add");
      setEditedContent("");
      contactToggleModel();
    } else if (action === "edit") {
      setCurrentModelAction("edit");
      setEditedContent(e);
      contactToggleModel();
    } else if (action === "delete") {
      const contactlistsTem = contactlists;
      const filteredContactlistsTem = filteredContactlists;

      remove(contactlistsTem, n => {
        return n.id === e.id;
      });
      remove(filteredContactlistsTem, n => {
        return n.id === e.id;
      });
      await setFilteredContactlists(null);
      await setContactlists(contactlistsTem);
      await setFilteredContactlists(filteredContactlistsTem);
    }
  };

  const selectAction = action => {
    if (action === "selectall") {
      const ids = filteredContactlists.map(a => a.id);
      setSelectedValue(ids);
    } else if (action === "unselectall") {
      setSelectedValue(null);
    }
  };

  const toggleFavContact = async contact => {
    const contactlistsTem = filteredContactlists;
    let index = findIndex(contactlistsTem, { id: contact.id });
    contact["isfav"] = !contact["isfav"];
    filteredContactlists.splice(index, 1, contact);
    await setFilteredContactlists(null);
    await setFilteredContactlists(contactlistsTem);
    await activePanel(panel);
  };

  const deleteSelected = () => {
    const contactlistsTem = contactlists;
    const filtered = filter(contactlistsTem, x => !selected.includes(x.id));
    setContactlists(filtered);
    setFilteredContactlists(filtered);
    setSelectedValue([]);
  };

  const handleSearch = e => {
    setSearchInput(e.target.value);
    const filteredContactlists = contactlists.filter(e => {
      if (panel === "favorite") {
        return (
          (e.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            e.email.toLowerCase().includes(searchInput.toLowerCase()) ||
            e.mobile.toLowerCase().includes(searchInput.toLowerCase())) &&
          e.isfav === true
        );
      } else if (panel === "frequently") {
        return (
          (e.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            e.email.toLowerCase().includes(searchInput.toLowerCase()) ||
            e.mobile.toLowerCase().includes(searchInput.toLowerCase())) &&
          e.isfrequent === true
        );
      } else {
        return (
          e.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          e.email.toLowerCase().includes(searchInput.toLowerCase()) ||
          e.mobile.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
    });

    setFilteredContactlists(filteredContactlists);
  };

  const handleFormSubmit = data => {
    if (currentModelAction === "add") {
      const obj = {
        ...data,
        id: Math.random(),
        profile: null,
        isfav: false,
        isfrequent: false
      };

      const filteredContactlistsTem = filteredContactlists;

      filteredContactlistsTem.splice(0, 0, obj);
      setFilteredContactlists(filteredContactlistsTem);
      contactToggleModel();
    } else if (currentModelAction === "edit") {
      const editedContentTem = editedContent;
      const filteredContactlistsTem = filteredContactlists;

      const obj = {
        ...data,
        id: editedContentTem.id,
        profile: editedContentTem.profile,
        isfav: editedContentTem.isfav,
        isfrequent: editedContentTem.isfrequent
      };

      const index = findIndex(filteredContactlistsTem, {
        id: editedContentTem.id
      });

      filteredContactlistsTem.splice(index, 1, obj);
      setFilteredContactlists(filteredContactlistsTem);
      contactToggleModel();
    }
  };
  return (
    <ContactWrapper {...props}>
      <div className="contact-container">
        <PageTitle title="sidebar.employee" />

        <div className="flex plr-15 mobile-spacing-class">
          <div className="flex-1 fill-width">
            {contactlists && (
              <ContactListComponent
                panel={panel}
                searchInput={searchInput}
                activePanel={panel => activePanel(panel)}
                contactlists={filteredContactlists}
                selected={selected}
                selectValue={data => selectValue(data)}
                selectAction={data => selectAction(data)}
                handleSearch={data => handleSearch(data)}
                toggleFavContact={data => toggleFavContact(data)}
                deleteSelected={() => deleteSelected}
                actiononContact={(action, data) =>
                  actiononContact(action, data)
                }
              />
            )}
          </div>
          {/* Contact Right List Part  */}
        </div>
      </div>

      <Modal
        centered
        isOpen={contactModel}
        fade={false}
        toggle={contactToggleModel}
        className={props.className}
      >
        <ModalHeader toggle={contactToggleModel}>
          {currentModelAction === "add" ? (
            <span>Add Employee</span>
          ) : (
            <span>Edit Employee</span>
          )}
        </ModalHeader>
        <ModalBody>
          <ContactForm
            data={editedContent}
            handleFormSubmit={data => handleFormSubmit(data)}
          />
        </ModalBody>
        <ModalFooter>
          <Button className="c-btn ma-5 c-light">Cancel</Button>
          <Button
            className="c-btn ma-5 c-success"
            onClick={data => handleFormSubmit(data)}
          >
            Submit{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </ContactWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    themeSetting: {
      toolbarDisplayValue: state.themeSetting.toolbarDisplayValue,
      footerDisplayValue: state.themeSetting.footerDisplayValue
    }
  };
};

export default connect(mapStateToProps, null)(TrainingProgramSetup);
