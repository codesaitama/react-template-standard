import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import RegisterValidateForm from "components/forms/validationform/RegisterValidateForm";
import EditForm from "components/forms/validationform/EditForm";
import ValidationTypes from "components/forms/validationform/ValidationTypes";

const ValidationForm = ({ sidebarTheme }) => {
    return (
        <div>
            <PageTitle
                title="sidebar.validationforms"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.forms"
                    },
                    {
                        name: "sidebar.validationforms"
                    }
                ]}
            />
            <div>
                <div className="row ml-0" style={{marginTop: '-15px'}}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Register Form
                            </div>
                            <div className="roe-card-body">
                                <RegisterValidateForm
                                    sidebarTheme={sidebarTheme}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Edit Form
                            </div>
                            <div className="roe-card-body">
                                <EditForm
                                    sidebarTheme={sidebarTheme}
                                    data={{
                                        firstname: "Alice",
                                        lastname: "Blue",
                                        phone_number: "7463736355",
                                        email: "alice@12gmail.com"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Validation Types
                            </div>
                            <div className="roe-card-body">
                                <ValidationTypes />
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
)(ValidationForm);
