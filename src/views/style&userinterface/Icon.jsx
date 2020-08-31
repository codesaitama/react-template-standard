import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import { IconComponent } from "components/common/IconComponent";
import { iconData } from "util/data/icons";
import { InputGroup, Input } from "reactstrap";

const Icon = ({ sidebarTheme }) => {
    const [searchInput, setSearchInput] = useState("");
    const [iconStateData, setIconStateData] = useState(iconData);
    const activeColor = {
        color: '#563c91'
    };

    const changeSearchInput = e => {
        const iconStateData = iconData;
        const data = iconStateData.filter(word =>
            word.text.includes(e.target.value.toLowerCase())
        );
        setIconStateData(e.target.value !== "" ? data : iconData);
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <PageTitle
                title="sidebar.icons"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.userinterface"
                    },
                    {
                        name: "sidebar.icons"
                    }
                ]}
            />
            <div className="mb-6 plr-15">
                <div className="introduction" style={activeColor}>
                    Introduction
                </div>
                <div className="intro-detail">
                    We use <span className="chip">Font Awesome</span> icons. You
                    can also refer more icons from the{" "}
                    <a
                        style={activeColor}
                        href="https://fontawesome.com/icons"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        font awesome icons
                    </a>
                </div>
            </div>
            <div>
                <div className="row ma-0">
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header flex center">
                                <div className="hash"># </div>
                                <div className="flex-1 mr-15 my-title ml-1">Icons</div>
                                <InputGroup className="ml-auto icon-search">
                                    <Input
                                        className="form-control react-form-search-input ml-auto"
                                        placeholder="Search Icons..."
                                        id="search"
                                        value={searchInput}
                                        onChange={changeSearchInput}
                                        style={{maxWidth: '300px'}}
                                    />
                                </InputGroup>
                            </div>
                            <div className="roe-card-body">
                                <div
                                    className="row"
                                    style={{ margin: "0 -5px" }}
                                >
                                    {iconStateData && iconStateData.length ?
                                        iconStateData.map((icon, i) => {
                                            return (
                                                <div
                                                    className="col-6 col-sm-3 col-md-4 col-lg-3 col-xl-2 mtb-5 plr-5"
                                                    key={i}
                                                >
                                                    <IconComponent
                                                        iconClass={
                                                            icon.iconClass
                                                        }
                                                        text={icon.text}
                                                    />
                                                </div>
                                            );
                                        }) :
                                        <div>
                                            You can find more icons from here <a  style={activeColor} href="https://fontawesome.com/icons?d=gallery&q=vert&m=free" target="_blank" rel="noopener noreferrer">Font Awesome</a>
                                        </div>
                                    }
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
)(Icon);
