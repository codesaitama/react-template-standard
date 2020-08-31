import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import { notificationApiCode } from "util/data/apiCodeFormate";
import CustomToast from "components/notifications/CustomToast";
import Button from "components/button/Button";
import CodeLooker from "components/common/CodeLooker";

const Notifications = ({ sidebarTheme }) => {
    const [topLeft, setTopLeft] = useState(false);
    const [topRight, setTopRight] = useState(false);
    const [bottomLeft, setBottomLeft] = useState(false);
    const [bottomRight, setBottomRight] = useState(false);
    const [bottomMiddle, setBottomMiddle] = useState(false);
    const [topMiddle, setTopMiddle] = useState(false);

    const activeColor = {
        color: '#563c91'
    };

    const onNotificationCloseCLick = () => {
        // console.log('close notification code here')
    }

    return (
        <div>
            <PageTitle
                title="sidebar.notifications"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.uicomponents"
                    },
                    {
                        name: "sidebar.notifications"
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
                            <span className="chip">CustomToast</span> is An
                            awesome animated notification component handcrafted
                            by our team.
                        </div>
                    </div>
                    <div className="sub-heading">
                        You need to import below way.
                    </div>
                    <CodeLooker Code={notificationApiCode} />
                </div>
                <div className="row ma-0">
                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Notification
                                Patterns
                            </div>
                            <div className="roe-card-body">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            className="c-primary"
                                            show={true}
                                            message={"Primary Notification"}
                                            onCloseCLick={onNotificationCloseCLick}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            className="c-secondary"
                                            show={true}
                                            message={"Secondary Notification"}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            className="c-info"
                                            show={true}
                                            message={"Info Notification"}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            className="c-warning"
                                            show={true}
                                            message={"Warning Notification"}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            show={true}
                                            className="c-danger"
                                            message={"Danger Notification"}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            className="c-focus"
                                            show={true}
                                            message={"Focus Notification"}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            className="c-light"
                                            show={true}
                                            message={"Light Notification"}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6 mb-10">
                                        <CustomToast
                                            heading={"Notify!"}
                                            show={true}
                                            className="c-dark"
                                            message={"Dark Notification"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Notifications
                                Places
                            </div>
                            <div className="roe-card-body">
                                <div className="row">
                                    <div className="col-12 col-sm-4 mb-10">
                                        <Button
                                            onClick={() => setTopLeft(true)}
                                            className="c-btn c-secondary c-btn-lg c-btn-wide"
                                            style={{ width: "100%" }}
                                        >
                                            Top Left
                                        </Button>
                                        <CustomToast
                                            heading={"Notify!"}
                                            width={400}
                                            show={topLeft}
                                            transition
                                            position="top-left"
                                            className="c-secondary"
                                            message={"Secondary Notification"}
                                            onCloseCLick={() =>
                                                setTopLeft(false)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 mb-10">
                                        <Button
                                            onClick={() => setTopMiddle(true)}
                                            className="c-btn c-warning c-btn-lg c-btn-wide"
                                            style={{ width: "100%" }}
                                        >
                                            Top Middle
                                        </Button>
                                        <CustomToast
                                            heading={"Notify!"}
                                            width={400}
                                            show={topMiddle}
                                            transition
                                            position="top-middle"
                                            className="c-warning"
                                            message={"Warning Notification"}
                                            onCloseCLick={() =>
                                                setTopMiddle(false)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 mb-10">
                                        <Button
                                            onClick={() => setTopRight(true)}
                                            className="c-btn c-danger c-btn-lg c-btn-wide"
                                            style={{ width: "100%" }}
                                        >
                                            Top Right
                                        </Button>
                                        <CustomToast
                                            heading={"Notify!"}
                                            width={400}
                                            show={topRight}
                                            transition
                                            position="top-right"
                                            className="c-danger"
                                            message={"Danger Notification"}
                                            onCloseCLick={() =>
                                                setTopRight(false)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 mb-10">
                                        <Button
                                            onClick={() => setBottomLeft(true)}
                                            className="c-btn c-focus c-btn-lg c-btn-wide"
                                            style={{ width: "100%" }}
                                        >
                                            Bottom Left
                                        </Button>
                                        <CustomToast
                                            heading={"Notify!"}
                                            width={400}
                                            show={bottomLeft}
                                            transition
                                            position="bottom-left"
                                            className="c-focus"
                                            message={"Focus Notification"}
                                            onCloseCLick={() =>
                                                setBottomLeft(false)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 mb-10">
                                        <Button
                                            onClick={() =>
                                                setBottomMiddle(true)
                                            }
                                            className="c-btn c-light c-btn-lg c-btn-wide"
                                            style={{ width: "100%" }}
                                        >
                                            Bottom Middle
                                        </Button>
                                        <CustomToast
                                            heading={"Notify!"}
                                            width={400}
                                            show={bottomMiddle}
                                            transition
                                            position="bottom-middle"
                                            className="c-light"
                                            message={"Focus Notification"}
                                            onCloseCLick={() =>
                                                setBottomMiddle(false)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-sm-4 mb-10">
                                        <Button
                                            onClick={() => setBottomRight(true)}
                                            className="c-btn c-dark c-btn-lg c-btn-wide"
                                            style={{ width: "100%" }}
                                        >
                                            Bottom Right
                                        </Button>
                                        <CustomToast
                                            heading={"Notify!"}
                                            width={400}
                                            show={bottomRight}
                                            transition
                                            position="bottom-right"
                                            className="c-dark"
                                            message={"Focus Notification"}
                                            onCloseCLick={() =>
                                                setBottomRight(false)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(Notifications);
