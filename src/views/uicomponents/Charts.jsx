import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import { chartsObject } from "components/charts/index";
import CodeLooker from "components/common/CodeLooker";

const Charts = ({ sidebarTheme }) => {
    const activeColor = {
        color: '#563c91'
    };

    return (
        <div className="chart-container">
            <PageTitle
                title="sidebar.charts"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.uicomponents"
                    },
                    {
                        name: "sidebar.charts"
                    }
                ]}
            />
            <div>
                <div className="plr-15">
                    <div className="mb-15">
                        <div className="introduction" style={activeColor}>
                            Introduction
                        </div>
                        <div className="intro-detail">
                            <span className="chip">React-chartjs</span> is a
                            wrapper for{" "}
                            <a
                                style={activeColor}
                                href="https://github.com/chartjs/Chart.js"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Chart.js
                            </a>{" "}
                            in react. You can easily create reuseable chart
                            components.
                        </div>
                    </div>
                    <div className="mini-text">
                        You can also refer more details from the{" "}
                        <a
                            style={activeColor}
                            href="https://www.npmjs.com/package/react-chartjs-2"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            React-chartjs documentation.
                        </a>
                    </div>
                </div>
                <div>
                    <div className="row ma-0">
                        {chartsObject.map((e, i) => {
                            return (
                                <div className="col-sm-12 ptb-15" key={i}>
                                    <div className="roe-card-style">
                                        <div className="roe-card-header">
                                            <span className="hash"># </span>{" "}
                                            {e.title}
                                            <div className="chart-discription">
                                                {e.discription}
                                            </div>
                                        </div>
                                        <div className="roe-card-body">
                                            <e.component
                                                sidebarTheme={sidebarTheme}
                                            />
                                            <CodeLooker Code={e.code} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
)(Charts);
