import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import SelectMenusComponent from "components/forms/selectmenus/SelectMenus";

const SelectComponent = ({ sidebarTheme }) => {
    const activeColor = {
        color: '#563c91'
    };

    return (
        <div>
            <PageTitle
                title="sidebar.select"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.forms"
                    },
                    {
                        name: "sidebar.select"
                    }
                ]}
            />
            <div className="mb-6 plr-15">
                <div className="introduction" style={activeColor}>
                    Introduction
                </div>
                <div className="intro-detail">
                    <span className="chip">React Select</span> is a A flexible
                    and beautiful Select Input control for ReactJS with
                    multiselect, autocomplete, async and creatable support.You
                    can also refer more details from the{" "}
                    <a
                        style={activeColor}
                        href="https://react-select.com/home"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        React Select
                    </a>{" "}
                    documentation.
                </div>
            </div>
            <div>
                <SelectMenusComponent activeColor={activeColor} />
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
)(SelectComponent);
