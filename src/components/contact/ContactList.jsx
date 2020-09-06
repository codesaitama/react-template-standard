import React, { useState } from "react";
import { Table } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import Button from "components/button/Button";

const ContactList = ({
  selectValue,
  searchInput,
  handleSearch,
  contactlists,
  selected = [],
  actiononContact,
  selectAction,
  toggleFavContact,
  deleteSelected,
  activePanel,
  panel
}) => {
  //const [selectDrp, SetselectDrp] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  // const [filterDrp, setFilterDrp] = useState(false);
  const selectContact = e => {
    selectValue(e.target.value);
  };

  return (
    <div className="right-panel roe-box-shadow">
      <div className="contact-list-header">
        <div className="contact-action-dropdown flex-1">
          <InputGroup size="sm">
            <Input placeholder="username" />
            <InputGroupAddon addonType="append">
              <Button className="c-outline-primary c-primary">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="contact-action-dropdown flex-1"></div>
        <div className="contact-action-dropdown flex-1"></div>
        {!isSearch && (
          <div className="flex center">
            <div>
              <button
                className="c-btn c-primary ma-5"
                onClick={() => actiononContact("add", null)}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="contact-table">
        <Scrollbars
          autoHide
          className="contact-scroll-height"
          style={{ minHeight: "220px" }}
        >
          {contactlists && contactlists.length ? (
            <Table borderless hover className="mb-0">
              <tbody>
                {contactlists.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <div className="pretty p-svg p-curve contact-selection">
                          <input
                            type="checkbox"
                            value={e.id}
                            onChange={selectContact}
                            checked={selected ? selected.includes(e.id) : false}
                          />
                          <div className="state p-primary">
                            {/* <!-- svg path --> */}
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{
                                  stroke: "white",
                                  fill: "white"
                                }}
                              />
                            </svg>
                            <label />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex center">
                          {e.profile ? (
                            <div>
                              <img
                                className="contact-profile-image"
                                src={e.profile}
                                alt="profile"
                              />
                            </div>
                          ) : (
                            <div>
                              <div className="contact-profile-no-image">
                                <i className="far fa-user" />
                              </div>
                            </div>
                          )}
                          <div className="ml-10">{e.name}</div>
                        </div>
                      </td>
                      <td>{e.email}</td>
                      <td>{e.mobile}</td>
                      <td>
                        {e.isfav ? (
                          <i
                            className="fas fa-heart contact-fav-icon"
                            onClick={() => toggleFavContact(e)}
                          />
                        ) : (
                          <i
                            className="far fa-heart contact-fav-icon"
                            onClick={() => toggleFavContact(e)}
                          />
                        )}
                      </td>
                      <td>
                        <i
                          className="fas fa-edit more-vert-icon"
                          onClick={() => actiononContact("edit", e)}
                        />
                      </td>
                      <td>
                        <i
                          className="fas fa-trash more-vert-icon"
                          onClick={() => actiononContact("delete", e)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <div className="text-center no-found-message">
              No Contacts Found....
            </div>
          )}
        </Scrollbars>
      </div>
    </div>
  );
};

export default ContactList;
