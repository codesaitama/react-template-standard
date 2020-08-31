import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import RoeMarkupEditor from "components/roeeditor/RoeMarkupEditor";
import { mentions, demoText } from "components/roeeditor/users";
import { compile } from "components/roeeditor/utils";

const RoeCustomEditor = ({ sidebarTheme }) => {
    const [inputValue, setInputValue] = useState(demoText);

    const activeColor = {
        color: '#563c91'
    };

    const focusHandler = () => {
        // console.log('focus handler')
    };

    const blurHandler = () => {
        // console.log('blur handler')
    };

    const submitHandler = () => {
        // console.log('submit handler')
    };

    return (
        <div>
            <PageTitle
                title="sidebar.roemarkupeditor"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.editors"
                    },
                    {
                        name: "sidebar.roemarkupeditor"
                    }
                ]}
            />
            <div className="mb-6 plr-15">
                <div className="introduction" style={activeColor}>
                    Introduction
                </div>
                <div className="intro-detail">
                    <span className="chip">Roe Markup editor</span> is a custom
                    React markup editor has been made by Roe Team.{" "}
                </div>
            </div>
            <div className="mlr-15 mt-30">
                <RoeMarkupEditor
                    inputValue={inputValue}
                    onChangeInput={e => setInputValue(e)}
                    mentions={mentions}
                    placeHolder="Enter Input Value..."
                    minHeight={100}
                    maxHeight={250}
                    focusHandler={focusHandler}
                    blurHandler={blurHandler}
                    submitHandler={submitHandler}
                />
            </div>
            <div className="preview-section mlr-15 mt-30 pa-15">
                <div className="fs-16 demi-bold-text mb-10">Preview:</div>
                <div
                    className="fs-14 editor-prototype"
                    dangerouslySetInnerHTML={{ __html: compile(inputValue) }}
                ></div>
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
)(RoeCustomEditor);
