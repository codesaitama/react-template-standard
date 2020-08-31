import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import SideTab from "components/colors/sidetab/SideTab";
import ColorRoutes from "components/colors/colorroutes/ColorRoutes";
import { colorJson } from "./../../util/data/colors";
import { Scrollbars } from "react-custom-scrollbars";

const Colors = ({ themeSetting }) => {
    const [colors, setColors] = useState(null);
    const [customData] = useState();
    const [ActiveColorTab, setActiveColorTab] = useState(null);

    let colorBlockHeight;
    const activeTabColor = data => {
        setActiveColorTab(data);
    };

    if (
        themeSetting.toolbarDisplayValue === "hide" &&
        themeSetting.footerDisplayValue === "hide"
    ) {
        colorBlockHeight = {
            height: "calc(100vh - 138px)"
        };
    } else if (themeSetting.toolbarDisplayValue === "hide") {
        colorBlockHeight = {
            height: "calc(100vh - 203px)"
        };
    } else if (themeSetting.footerDisplayValue === "hide") {
        colorBlockHeight = {
            height: "calc(100vh - 203px)"
        };
    } else {
        colorBlockHeight = {
            height: "calc(100vh - 255px)"
        };
    }

    const makeData = () => {
        const array = [];
        Object.keys(colorJson).forEach(function(key) {
            const colorArray = [];
            Object.keys(colorJson[key]).forEach(function(key2) {
                const colorobj = {
                    name: key2,
                    color: colorJson[key][key2].hex,
                    textColor: colorJson[key][key2].textColor
                };
                colorArray.push(colorobj);
            });
            const obj = {
                name: key,
                colors: colorArray
            };
            array.push(obj);
        });
        return array;
    };

    useEffect(() => {
        const data = makeData();
        setColors(data);
        setActiveColorTab(data[0]);
    }, [customData]);

    return (
        <div>
            <PageTitle
                title="sidebar.colors"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.userinterface"
                    },
                    {
                        name: "sidebar.colors"
                    }
                ]}
            />
            <div>
                <div className="row mlr-0" style={{marginTop: '-15px'}}>
                    <div className="col-lg-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Shades
                            </div>
                            <div className="roe-card-body">
                                {colors && (
                                    <div className="roe-colors">
                                        <div className="color-left-side">
                                            <Scrollbars
                                                style={colorBlockHeight}
                                            >
                                                <SideTab
                                                    colors={colors}
                                                    activeTabColor={data =>
                                                        activeTabColor(data)
                                                    }
                                                    ActiveColorTab={
                                                        ActiveColorTab
                                                    }
                                                />
                                            </Scrollbars>
                                        </div>
                                        <div className="color-right-side">
                                            <Scrollbars
                                                style={colorBlockHeight}
                                            >
                                                <ColorRoutes
                                                    ActiveColorTab={
                                                        ActiveColorTab
                                                    }
                                                />
                                            </Scrollbars>
                                        </div>
                                    </div>
                                )}
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
        ...state.themeChanger,
        themeSetting: {
            toolbarDisplayValue: state.themeSetting.toolbarDisplayValue,
            footerDisplayValue: state.themeSetting.footerDisplayValue
        }
    };
};

export default connect(
    mapStateToProps,
    null
)(Colors);
