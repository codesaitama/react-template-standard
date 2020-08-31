import React, { useState } from "react";
import PageTitle from "components/common/PageTitle";
import { connect } from "react-redux";
import themeActions from "redux/themeChanger/actions.js";
import CodeLooker from "components/common/CodeLooker";

const { changeTheme } = themeActions;

const themes = [
    {
        id: 1,
        sidebarTheme: "themedefault",
        topbarTheme: "themedefault",
        footerTheme: "themedefault",
        layoutTheme: "themedefault",
        sidebar: "#2a2d35",
        topbar: "#ffffff",
        layout: "#fafafa",
        footer: "#ffffff",
        active: "#f6a821"
    },
    {
        id: 2,
        sidebarTheme: "theme1",
        topbarTheme: "theme4",
        footerTheme: "theme4",
        layoutTheme: "theme1",
        sidebar: "#273135",
        topbar: "#EBECEC",
        layout: "#ffffff",
        footer: "#EBECEC",
        active: "#FA7252"
    },
    {
        id: 3,
        sidebarTheme: "theme3",
        topbarTheme: "themedefault",
        footerTheme: "themedefault",
        layoutTheme: "themedefault",
        sidebar: "#241d3b",
        topbar: "#ffffff",
        layout: "#fafafa",
        footer: "#ffffff",
        active: "#6200ea"
    },
    {
        id: 4,
        sidebarTheme: "theme4",
        topbarTheme: "theme4",
        footerTheme: "theme4",
        layoutTheme: "theme5",
        sidebar: "#422e62",
        topbar: "#EBECEC",
        layout: "#D1D1D1",
        footer: "#EBECEC",
        active: "#75678C"
    },
    {
        id: 5,
        sidebarTheme: "theme2",
        topbarTheme: "theme4",
        footerTheme: "theme4",
        layoutTheme: "theme1",
        sidebar: "#FFF",
        topbar: "#EBECEC",
        layout: "#ffffff",
        footer: "#EBECEC",
        active: "#68B3C8"
    },
    {
        id: 6,
        sidebarTheme: "theme1",
        topbarTheme: "theme1",
        footerTheme: "theme1",
        layoutTheme: "theme6",
        sidebar: "#273135",
        topbar: "#273135",
        layout: "#2d3038",
        footer: "#273135",
        active: "#FA7252"
    }
];

const Themes = ({ changeTheme, sidebarTheme }) => {
    const [currentTheme, setCurrentTheme] = useState(null);

    let code;
    const activeColor = {
        color: '#563c91'
    };
    const chooseDefaulttheme = data => {
        setCurrentTheme(data);
        changeTheme("sidebarTheme", data.sidebarTheme);
        changeTheme("topbarTheme", data.topbarTheme);
        changeTheme("footerTheme", data.footerTheme);
        changeTheme("layoutTheme", data.layoutTheme);
    };

    if (currentTheme) {
        code = `/* You can set theme configurations in src/settings/index file */

const themeConfig = {
    sidebar: ${currentTheme.sidebarTheme},
    topbar: ${currentTheme.topbarTheme},
    footer: ${currentTheme.footerTheme},
    layout: ${currentTheme.layoutTheme},
};`;
    }

    return (
        <div>
            <PageTitle
                title="sidebar.themes"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.userinterface"
                    },
                    {
                        name: "sidebar.themes"
                    }
                ]}
            />
            <div className="mb-6 plr-15">
                <div className="introduction" style={activeColor}>
                    Introduction
                </div>
                <div className="intro-detail">
                    We provide a beautiful theme settings. you can choose any
                    one and set in the configuration file as per our document.
                </div>
                {currentTheme && <CodeLooker Code={code} />}
            </div>
            <div className="plr-15 pt-15">
                <div className="row">
                    {themes.map((e, i) => {
                        return (
                            <div
                                className="col-md-12 col-lg-6 col-xl-4"
                                key={i}
                            >
                                <div
                                    className="roe-card-style cursor-pointer"
                                    onClick={() => chooseDefaulttheme(e)}
                                >
                                    <div className="flex">
                                        <div>
                                            <div
                                                style={{
                                                    backgroundColor: e.sidebar,
                                                    border: `4px solid ${
                                                        e.active
                                                    }`
                                                }}
                                                className="mr-0 theme-choose-side-block roe-box-shadow"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="theme-choose-header-block roe-box-shadow"
                                                style={{
                                                    backgroundColor: e.topbar
                                                }}
                                            />
                                            <div
                                                className="theme-choose-layout-block roe-box-shadow"
                                                style={{
                                                    backgroundColor: e.layout
                                                }}
                                            />
                                            <div
                                                className="theme-choose-footer-block roe-box-shadow"
                                                style={{
                                                    backgroundColor: e.footer
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <i
                                        style={{
                                            fontSize: "120px",
                                            marginTop: "-30px",
                                            color:
                                                currentTheme &&
                                                currentTheme.id === e.id
                                                    ? e.active
                                                    : "rgba(68,70,79,0.5)"
                                        }}
                                        className="fas fa-caret-up"
                                    />
                                </div>
                            </div>
                        );
                    })}
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
    {
        changeTheme
    }
)(Themes);
