import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import Editor from 'for-editor';
import { forEditText } from 'components/roeeditor/users'

const Quill = ({ sidebarTheme }) => {
    const [text, setText] = useState(forEditText)
    
    const activeColor = {
        color: '#563c91'
    };

    return (
        <div>
            <PageTitle
                title="sidebar.foreditor"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.editors"
                    },
                    {
                        name: "sidebar.foreditor"
                    }
                ]}
            />
            <div className="mb-6 plr-15">
                <div className="introduction" style={activeColor}>
                    Introduction
                </div>
                <div className="intro-detail">
                    <span className="chip">For editor</span> for-editor-A markdown editor based on React{" "}
                    <a
                        style={activeColor}
                        href="https://github.com/kkfor/for-editor/blob/master/README.EN.md"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        click here to view details
                    </a>
                </div>
            </div>
            <div className="mlr-15 mt-30 for-editor">
                <Editor 
                    value={text} 
                    onChange={((text) => setText(text))} 
                    placeholder="Enter Text here..."
                    language="en"
                    lineNum={true}
                    height="400px"
                    preview={true}
                    expand={false}
                    subfield={true}
                    toolbar={
                       {
                            h1: true,
                            h2: true,
                            h3: true,
                            h4: true,
                            img: true,
                            link: true,
                            code: true,
                            preview: true,
                            expand: true,
                            /* v0.0.9 */
                            undo: true,
                            redo: true,
                            save: true,
                            /* v0.2.3 */
                            subfield: true
                       }
                    }
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
)(Quill);
