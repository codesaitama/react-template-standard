import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import SimpleForm from "components/forms/SimpleForm";
import HorizontalForm from "components/forms/HorizontalForm";
import FormElements from "components/forms/FormElements";
import InputSizing from "components/forms/InputSizing";

const RegularForm = ({ sidebarTheme }) => {
    return (
        <div>
            <PageTitle
                title="sidebar.regularforms"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.forms"
                    },
                    {
                        name: "sidebar.regularforms"
                    }
                ]}
            />
            <div>
                <div className="row mlr-0" style={{marginTop: '-15px'}}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Simple Form
                            </div>
                            <div className="roe-card-body">
                                <SimpleForm sidebarTheme={sidebarTheme} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Horizontal Form
                            </div>
                            <div className="roe-card-body">
                                <HorizontalForm sidebarTheme={sidebarTheme} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Form Elements
                            </div>
                            <div className="roe-card-body">
                                <FormElements />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Input Sizing
                            </div>
                            <div className="roe-card-body">
                                <InputSizing />
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
)(RegularForm);
