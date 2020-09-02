import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import ReactRegularTable from "components/tables/regulartable/ReactRegularTable";
import { regularTabelData, regularTabelColumns, regularTablesList } from "util/data/regularTableData";
import Button from "components/button/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, InputGroupAddon } from "reactstrap";

const EmployeeInsert = ({ sidebarTheme, layoutTheme, className  }) => {

    const [modal, setmodal] = useState(false);
    const [backdrop, setBackdrop] = useState('static');

  return (
    <div>
            <PageTitle
                title="header.create_employee"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.employee"
                    },
                    {
                        name: "header.create_employee"
                    }
                ]}
            />
            <div className="row ma-0">
                {regularTablesList &&
                    regularTablesList.filter(x => x.title === 'Table head Dark').map((e, i) => {
                        e.title = 'Create Employee'
                        return (
                            <div className="col-sm-12 pb-30" key={i}>
                                <div className="roe-card-style">
                                    <div className="roe-card-header">
                                        <span className="hash"># </span>{" "}
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <InputGroup>
                                                    <Input />
                                                    <InputGroupAddon addonType="append">
                                                        <Button className="c-secondary"><i className="fas fa-search"></i></Button>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                            </div>
                                            <div className="col-sm-8">
                                                <Button className="c-btn c-info ma-5 footer-purchase-button pull-right" onClick={() => setmodal(!modal)} dataStyle="expand-left" >
                                                    <span className="fs-14 demi-bold-text">Add Employee</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="roe-card-body">
                                        <div className="my-table-custom-class">
                                            <ReactRegularTable
                                                data={regularTabelData}
                                                column={regularTabelColumns}
                                                caption={e.caption}
                                                dark={e.dark}
                                                headerDark={e.headerDark}
                                                striped={e.striped}
                                                bordered={e.bordered}
                                                borderless={e.borderless}
                                                hover={e.hover}
                                                small={e.small}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <Modal isOpen={modal} toggle={() => setmodal(!modal)} className={className} backdrop={backdrop} >
                <ModalHeader toggle={() => setmodal(!modal)}> Modal title </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button className="c-primary"  onClick={() => setmodal(!modal)}> Do Something </Button>
                    <Button className="c-secondary" onClick={() => setmodal(!modal)}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.themeChanger
  };
};

export default connect(mapStateToProps, null)(EmployeeInsert);
