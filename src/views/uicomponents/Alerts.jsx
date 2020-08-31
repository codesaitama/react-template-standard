import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import { sweetAlertCode } from "util/data/apiCodeFormate";
import Button from "components/button/Button";
import SweetAlert from "react-bootstrap-sweetalert";
import CodeLooker from "components/common/CodeLooker";

const Alerts = ({ sidebarTheme }) => {
    const [basicAlert, setBasicAlert] = useState(false);
    const [basicTitleAlert, setBasicTitleAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [warningAlert, setWarningAlert] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [customIconAlert, setCustomIconAlert] = useState(false);
    const [inputPrompt, setInputPrompt] = useState(false);
    const [inputData, setRecieveInput] = useState("");
    const [showInputData, setShowInputData] = useState(false);

    const activeColor = {
        color: '#563c91'
    };

    return (
        <div>
            <PageTitle
                title="sidebar.sweetalert"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.uicomponents"
                    },
                    {
                        name: "sidebar.sweetalert"
                    }
                ]}
            />
            <div>
                <div className="plr-15">
                    <div className="mb-15">
                        <div className="introduction" style={activeColor}>
                            Introduction
                        </div>
                        <div className="intro-detail">
                            <span className="chip">
                                react-bootstrap-sweetalert
                            </span>{" "}
                            is An awesome replacement for JavaScript's alert.
                        </div>
                    </div>
                    <div className="sub-heading">
                        You need to import below way.
                    </div>
                    <CodeLooker Code={sweetAlertCode} />
                    <div className="mini-text">
                        You can also refer more details from the{" "}
                        <a
                            style={activeColor}
                            href="https://github.com/djorg83/react-bootstrap-sweetalert"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            react-bootstrap-sweetalert documentation.
                        </a>
                    </div>
                </div>
                <div className="row ma-0">
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> A basic message
                            </div>
                            <div className="roe-card-body">
                                <Button
                                    onClick={() => setBasicAlert(!basicAlert)}
                                    className="c-btn ma-5 c-primary c-btn-lg c-btn-wide"
                                >
                                    Try me!
                                </Button>
                                <SweetAlert
                                    title="Here's a message!"
                                    onConfirm={() => setBasicAlert(!basicAlert)}
                                    show={basicAlert}
                                    confirmBtnCssClass="sweet-alert-confirm-button"
                                    cancelBtnCssClass="sweet-alert-cancle-button"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> A title with
                                text under
                            </div>
                            <div className="roe-card-body">
                                <Button
                                    onClick={() =>
                                        setBasicTitleAlert(!basicTitleAlert)
                                    }
                                    className="c-btn ma-5 c-secondary c-btn-lg c-btn-wide"
                                >
                                    Try me!
                                </Button>
                                <SweetAlert
                                    title="Here's a message!"
                                    show={basicTitleAlert}
                                    onConfirm={() =>
                                        setBasicTitleAlert(!basicTitleAlert)
                                    }
                                    confirmBtnCssClass="sweet-alert-confirm-button"
                                    cancelBtnCssClass="sweet-alert-cancle-button"
                                >
                                    It's pretty, isn't it?
                                </SweetAlert>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> A success
                                message!
                            </div>
                            <div className="roe-card-body">
                                <Button
                                    onClick={() =>
                                        setSuccessAlert(!successAlert)
                                    }
                                    className="c-btn ma-5 c-warning c-btn-lg c-btn-wide"
                                >
                                    Try me!
                                </Button>
                                <SweetAlert
                                    success
                                    show={successAlert}
                                    title="Good job!"
                                    onConfirm={() =>
                                        setSuccessAlert(!successAlert)
                                    }
                                    confirmBtnCssClass="sweet-alert-confirm-button"
                                    cancelBtnCssClass="sweet-alert-cancle-button"
                                >
                                    You clicked the button!
                                </SweetAlert>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> With Cancel and
                                Confirm callbacks
                            </div>
                            <div className="roe-card-body">
                                <Button
                                    onClick={() =>
                                        setWarningAlert(!warningAlert)
                                    }
                                    className="c-btn ma-5 c-info c-btn-lg c-btn-wide"
                                >
                                    Try me!
                                </Button>
                                <SweetAlert
                                    warning
                                    showCancel
                                    show={warningAlert}
                                    confirmBtnText="Yes, delete it!"
                                    confirmBtnBsStyle="danger"
                                    cancelBtnBsStyle="default"
                                    title="Are you sure?"
                                    onConfirm={() => {
                                        setConfirmDelete(!confirmDelete);
                                        setWarningAlert(false);
                                    }}
                                    onCancel={() =>
                                        setWarningAlert(!warningAlert)
                                    }
                                >
                                    You will not be able to recover this
                                    imaginary file!
                                </SweetAlert>

                                <SweetAlert
                                    success
                                    show={confirmDelete}
                                    title="Deleted!"
                                    onConfirm={() => {
                                        setConfirmDelete(!confirmDelete);
                                        setWarningAlert(false);
                                    }}
                                    confirmBtnCssClass="sweet-alert-confirm-button"
                                    cancelBtnCssClass="sweet-alert-cancle-button"
                                >
                                    Your file has been deleted.
                                </SweetAlert>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> A message with
                                a custom icon
                            </div>
                            <div className="roe-card-body">
                                <Button
                                    onClick={() =>
                                        setCustomIconAlert(!customIconAlert)
                                    }
                                    className="c-btn ma-5 c-danger c-btn-lg c-btn-wide"
                                >
                                    Try me!
                                </Button>
                                <SweetAlert
                                    custom
                                    showCancel
                                    show={customIconAlert}
                                    confirmBtnText="Yes"
                                    cancelBtnText="No"
                                    confirmBtnBsStyle="primary"
                                    cancelBtnBsStyle="default"
                                    customIcon="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Instagram-128.png"
                                    title="Do you like thumbs?"
                                    confirmBtnCssClass="sweet-alert-confirm-button"
                                    cancelBtnCssClass="sweet-alert-cancle-button"
                                    onConfirm={() =>
                                        setCustomIconAlert(!customIconAlert)
                                    }
                                    onCancel={() =>
                                        setCustomIconAlert(!customIconAlert)
                                    }
                                >
                                    You will find they are up!
                                </SweetAlert>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> With Input
                                Prompt
                            </div>
                            <div className="roe-card-body">
                                <Button
                                    onClick={() => setInputPrompt(!inputPrompt)}
                                    className="c-btn ma-5 c-focus c-btn-lg c-btn-wide"
                                >
                                    Try me!
                                </Button>
                                <SweetAlert
                                    input
                                    showCancel
                                    show={inputPrompt}
                                    cancelBtnBsStyle="default"
                                    confirmBtnCssClass="sweet-alert-confirm-button"
                                    cancelBtnCssClass="sweet-alert-cancle-button"
                                    customClass="sweet-alert-wrapper"
                                    title="An input!"
                                    placeHolder="Write something"
                                    onConfirm={data => {
                                        setRecieveInput(data);
                                        setShowInputData(true);
                                        setInputPrompt(false);
                                    }}
                                    onCancel={() =>
                                        setInputPrompt(!inputPrompt)
                                    }
                                    className="input-sweet-alert"
                                >
                                    Write something interesting:
                                </SweetAlert>

                                <SweetAlert
                                    inputData
                                    title={"You wrote: " + inputData}
                                    confirmBtnCssClass="sweet-alert-confirm-button"
                                    cancelBtnCssClass="sweet-alert-cancle-button"
                                    show={showInputData}
                                    onConfirm={() => setShowInputData(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(Alerts);
