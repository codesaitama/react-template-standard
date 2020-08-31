import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';


const Quill = ({ sidebarTheme }) => {
    const [text, setText] = useState("")
    const [theme, setTheme] = useState("snow")
    
    const activeColor = {
        color: '#563c91'
    };

    const handleThemeChange = (newTheme) => {
        if (newTheme === "core") newTheme = null;
        setTheme(newTheme)
    }

    return (
        <div>
            <PageTitle
                title="sidebar.quilleditor"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.editors"
                    },
                    {
                        name: "sidebar.quilleditor"
                    }
                ]}
            />
            <div className="mb-6 plr-15">
                <div className="introduction" style={activeColor}>
                    Introduction
                </div>
                <div className="intro-detail">
                    <span className="chip">Quill editor</span> A Quill component for React{" "}
                    <a
                        style={activeColor}
                        href="https://github.com/zenoamaro/react-quill"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        click here to view details
                    </a>
                </div>
            </div>
            <div className="mlr-15 mt-30 quill-editor">
                <ReactQuill 
                    value={text}
                    onChange={(e) => setText(e)} 
                    theme={theme}
                    placeholder={"Enter Text... "}
                    modules={Quill.modules}
                    formats={Quill.formats}
                    bounds={'.app'}
                />
            </div>
            <div className="themeSwitcher mt-10 mlr-15">
                <label className="fs-16 bold-text mr-10">Theme </label>
                <select onChange={(e) => 
                    handleThemeChange(e.target.value)}>
                    <option value="snow">Snow</option>
                    <option value="bubble">Bubble</option>
                    <option value="core">Core</option>
                </select>
            </div>
        </div>
    );
};

Quill.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
Quill.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(Quill);
