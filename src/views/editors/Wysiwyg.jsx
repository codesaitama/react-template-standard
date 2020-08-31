import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import Editor from "nib-core";

const Wysiwyg = ({ sidebarTheme }) => {
    const activeColor = {
        color: '#563c91'
    };

    return (
        <div>
            <PageTitle
                title="sidebar.wysiwygeditor"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.editors"
                    },
                    {
                        name: "sidebar.wysiwygeditor"
                    }
                ]}
            />
            <div className="mb-6 plr-15">
                <div className="introduction" style={activeColor}>
                    Introduction
                </div>
                <div className="intro-detail">
                    <span className="chip">Wysiwyg editor</span> components
                    built using ReactJS and Prosemirror{" "}
                    <a
                        style={activeColor}
                        href="https://reactjsexample.com/wysiwyg-editor-components-built-using-reactjs-and-prosemirror/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        click here to view details
                    </a>
                </div>
            </div>
            <div className="mlr-15 mt-30 wysiwyg-editor">
                <Editor
                    plugins="block inline"
                    toolbar={{ htop: "block inline" }}
                />
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
)(Wysiwyg);
