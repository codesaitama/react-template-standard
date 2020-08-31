import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import { gaugeCode } from "util/data/apiCodeFormate";
import Gauge from "react-svg-gauge";
import CodeLooker from "components/common/CodeLooker";

const Guages = ({ sidebarTheme }) => {
    const [value, setValue] = useState(50);

    const onChange = e => {
        setValue(parseInt(e.currentTarget.value, 10));
    };

    const activeColor = {
        color: '#563c91'
    };

    return (
        <div className="chart-container">
            <PageTitle 
                title="sidebar.gauges" 
                className="plr-15"           
                breadCrumb={[
                    {
                        name: "sidebar.others"
                    },
                    {
                        name: "sidebar.gauges"
                    }
                ]}/>
            <div className="plr-15">
                <div className="mb-15">
                    <div className="introduction" style={activeColor}>
                        Introduction
                    </div>
                    <div className="intro-detail">
                        <span className="chip">React-svg-gauge</span> is a
                        Simple SVG Gauge React component,
                    </div>
                </div>
                <div className="sub-heading">You need to import below way.</div>
                <CodeLooker Code={gaugeCode} />

                <div className="mini-text">
                    You can also refer more details from the{" "}
                    <a
                        style={activeColor}
                        href="https://github.com/Reggino/react-svg-gauge"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        React-svg-gauge documentation.
                    </a>
                </div>

                <div className="roe-card-style mtb-15">
                    <div className="roe-card-header">
                        <span className="hash"># </span> Examples
                    </div>
                    <div className="roe-card-body">
                        <div className="row ma-0">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 text-center">
                                <Gauge
                                    value={value}
                                    width={300}
                                    height={280}
                                    label="This is a big one"
                                    color="#563c91"
                                    valueFormatter={value => `${value}%`}
                                />
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 text-center">
                                <Gauge
                                    value={value}
                                    width={200}
                                    height={280}
                                    label="This is a smaller one"
                                    color="#563c91"
                                />
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 text-center">
                                <Gauge
                                    value={value}
                                    width={150}
                                    height={280}
                                    label="Custom Label"
                                    color="#563c91"
                                    valueFormatter={value => {
                                        if (value > 80) {
                                            return "😁";
                                        }

                                        if (value > 20) {
                                            return "😒";
                                        }

                                        return "😣";
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row ma-0">
                            <div className="col-sm-12 text-center mt-30">
                                <input
                                    style={{ width: "100%" }}
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={onChange}
                                />
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
)(Guages);
