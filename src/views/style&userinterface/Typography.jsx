import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import CodeLooker from "components/common/CodeLooker";

const display1 = `<div className="display-1 grey--text">Display 1</div>`;
const display2 = `<div className="display-2 grey--text">Display 2</div>`;
const display3 = `<div className="display-3 grey--text">Display 3</div>`;
const display4 = `<div className="display-4 grey--text">Display 4</div>`;
const display5 = `<div className="display-5 grey--text">Display 5</div>`;
const display6 = `<div className="display-6 grey--text">Display 6</div>`;
const customizing = `<div className="display-5 c-text-primary">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-secondary">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-success">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-info">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-warning">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-danger">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-focus">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-alternate">The typography of an application is just as important as its functionality. </div>
<div className="display-5 c-text-dark">The typography of an application is just as important as its functionality. </div>
`;
const blockquote = `<blockquote>
&#8220;First, solve the problem. Then, write the code.&#8221;
<footer>
  <small>
    <em>&mdash;John Johnson</em>
  </small>
</footer>
</blockquote>`;

const Typography = ({ sidebarTheme }) => {
    const titleStyle = {
        background: sidebarTheme.activeRouteBackColor,
        color: sidebarTheme.activeRouteTextColor,
        fontWeight: 600
    };

    return (
        <div>
            <PageTitle
                title="sidebar.typography"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.userinterface"
                    },
                    {
                        name: "sidebar.typography"
                    }
                ]}
            />
            <div className="row mlr-0" style={{marginTop: '-15px'}}>
                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Display 1
                        </div>
                        <div className="roe-card-body">
                            <div className="row ma-0">
                                <div className="col-12 col-sm-1 pl-0">
                                    <div
                                        style={titleStyle}
                                        className="heading-title"
                                    >
                                        h1
                                    </div>
                                </div>
                                <div className="col-12 col-sm-11 pl-0">
                                    <div className="display-1 grey--text">
                                        Display 1
                                    </div>
                                    <div className="mt-20 theme-color">
                                        <span className="mr-10 display-info-class">
                                            display-1
                                        </span>
                                        <span>font-weight 300</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CodeLooker Code={display1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Display 2
                        </div>
                        <div className="roe-card-body">
                            <div className="row ma-0">
                                <div className="col-12 pl-0 col-sm-1">
                                    <div
                                        style={titleStyle}
                                        className="heading-title"
                                    >
                                        h2
                                    </div>
                                </div>
                                <div className="col-12 pl-0 col-sm-11">
                                    <div className="display-2 grey--text">
                                        Display 2
                                    </div>
                                    <div className="mt-20 theme-color">
                                        <span className="mr-10 display-info-class">
                                            display-2
                                        </span>
                                        <span>font-weight 300</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CodeLooker Code={display2} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Display 3
                        </div>
                        <div className="roe-card-body">
                            <div className="row ma-0">
                                <div className="col-12 pl-0 col-sm-1">
                                    <div
                                        style={titleStyle}
                                        className="heading-title"
                                    >
                                        h3
                                    </div>
                                </div>
                                <div className="col-12 pl-0 col-sm-11">
                                    <div className="display-3 grey--text">
                                        Display 3
                                    </div>
                                    <div className="mt-20 theme-color">
                                        <span className="mr-10 display-info-class">
                                            display-3
                                        </span>
                                        <span>font-weight 300</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CodeLooker Code={display3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Display 4
                        </div>
                        <div className="roe-card-body">
                            <div className="row ma-0">
                                <div className="col-12 pl-0 col-sm-1">
                                    <div
                                        style={titleStyle}
                                        className="heading-title"
                                    >
                                        h4
                                    </div>
                                </div>
                                <div className="col-12 pl-0 col-sm-11">
                                    <div className="display-4 grey--text">
                                        Display 4
                                    </div>
                                    <div className="mt-20 theme-color">
                                        <span className="mr-10 display-info-class">
                                            display-4
                                        </span>
                                        <span>font-weight 300</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CodeLooker Code={display4} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Display 5
                        </div>
                        <div className="roe-card-body">
                            <div className="row ma-0">
                                <div className="col-12 pl-0 col-sm-1">
                                    <div
                                        style={titleStyle}
                                        className="heading-title"
                                    >
                                        h5
                                    </div>
                                </div>
                                <div className="col-12 pl-0 col-sm-11">
                                    <div className="display-5 grey--text">
                                        Display 5
                                    </div>
                                    <div className="mt-20 theme-color">
                                        <span className="mr-10 display-info-class">
                                            display-5
                                        </span>
                                        <span>font-weight 300</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CodeLooker Code={display5} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Display 6
                        </div>
                        <div className="roe-card-body">
                            <div className="row ma-0">
                                <div className="col-12 pl-0 col-sm-1">
                                    <div
                                        style={titleStyle}
                                        className="heading-title"
                                    >
                                        h6
                                    </div>
                                </div>
                                <div className="col-12 pl-0 col-sm-11">
                                    <div className="display-6 grey--text">
                                        Display 6
                                    </div>
                                    <div className="mt-20 theme-color">
                                        <span className="mr-10 display-info-class">
                                            display-6
                                        </span>
                                        <span>font-weight 300</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CodeLooker Code={display6} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Customizing
                        </div>
                        <div className="roe-card-body">
                            <div>
                                <div className="display-5 mb-6 c-text-primary">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-secondary">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-success">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-info">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-warning">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-danger">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-focus">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-alternate">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                                <div className="display-5 mb-6 c-text-dark">
                                    The typography of an application is just as
                                    important as its functionality.{" "}
                                </div>
                            </div>
                            <div>
                                <CodeLooker Code={customizing} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="roe-card-style mtb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Block Quote
                        </div>
                        <div className="roe-card-body">
                            <div className="theme-color">
                                <blockquote>
                                    &#8220;First, solve the problem. Then, write
                                    the code.&#8221;
                                    <footer>
                                        <small>
                                            <em>&mdash;John Johnson</em>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div>
                                <CodeLooker Code={blockquote} />
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
)(Typography);
