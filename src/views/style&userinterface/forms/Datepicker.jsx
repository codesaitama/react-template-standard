import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import AllDatePickers from "components/forms/alldatepickers/AllDatePicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ sidebarTheme }) => {
    const activeColor = {
        color: '#563c91'
    };

    return (
        <div>
            <PageTitle
                title="sidebar.datepicker"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.forms"
                    },
                    {
                        name: "sidebar.datepicker"
                    }
                ]}
            />
            <div className="plr-15">
                <div className="mb-6">
                    <div className="introduction" style={activeColor}>
                        Introduction
                    </div>
                    <div className="intro-detail">
                        <span className="chip">ReactJS Datepicker</span> is a
                        simple and reusable datepicker component for React.
                    </div>
                </div>
                <AllDatePickers sidebarTheme={sidebarTheme} />
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
)(DatePickerComponent);
