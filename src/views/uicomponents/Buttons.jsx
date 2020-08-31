/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import CodeLooker from "components/common/CodeLooker";
import { customButtonImport } from "util/data/apiCodeFormate";

import ColorTransitionButton from "components/custombuttons/ColorTransitionButton";
import DashBorderedButton from "components/custombuttons/DashBorderedButton";
import DashedRoundedButton from "components/custombuttons/DashedRoundedButton";
import DisabledDashButton from "components/custombuttons/DisabledDashButton";
import DisabledRoundedButton from "components/custombuttons/DisabledRoundedButton";
import DisabledSolidButton from "components/custombuttons/DisabledSolidButton";
import LodingDashButton from "components/custombuttons/LodingDashButton";
import LodingSolidButton from "components/custombuttons/LodingSolidButton";
import NoBorderButton from "components/custombuttons/NoBorderButton";
import OutlineRoundedButton from "components/custombuttons/OutlineRoundedButton";
import SizingDashButton from "components/custombuttons/SizingDashButton";
import SizingSolidButton from "components/custombuttons/SizingSolidButton";
import SolidButton from "components/custombuttons/SolidButton";
import SolidRoundedButton from "components/custombuttons/SolidRoundedButton";

const ColorTransitionButtonExampleSource = require("!!raw-loader!components/custombuttons/ColorTransitionButton");
const DashBorderedButtonExampleSource = require("!!raw-loader!components/custombuttons/DashBorderedButton");
const DashedRoundedButtonExampleSource = require("!!raw-loader!components/custombuttons/DashedRoundedButton");
const DisabledDashButtonExampleSource = require("!!raw-loader!components/custombuttons/DisabledDashButton");
const DisabledRoundedButtonExampleSource = require("!!raw-loader!components/custombuttons/DisabledRoundedButton");
const DisabledSolidButtonExampleSource = require("!!raw-loader!components/custombuttons/DisabledSolidButton");
const LodingDashButtonExampleSource = require("!!raw-loader!components/custombuttons/LodingDashButton");
const LodingSolidButtonExampleSource = require("!!raw-loader!components/custombuttons/LodingSolidButton");
const NoBorderButtonExampleSource = require("!!raw-loader!components/custombuttons/NoBorderButton");
const OutlineRoundedButtonExampleSource = require("!!raw-loader!components/custombuttons/OutlineRoundedButton");
const SizingDashButtonExampleSource = require("!!raw-loader!components/custombuttons/SizingDashButton");
const SizingSolidButtonExampleSource = require("!!raw-loader!components/custombuttons/SizingSolidButton");
const SolidButtonExampleSource = require("!!raw-loader!components/custombuttons/SolidButton");
const SolidRoundedButtonExampleSource = require("!!raw-loader!components/custombuttons/SolidRoundedButton");

const Buttons = ({ sidebarTheme }) => {
    const activeColor = {
        color: '#563c91'
    };

    return (
        <div>
            <PageTitle
                title="sidebar.custombuttons"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.uicomponents"
                    },
                    {
                        name: "sidebar.custombuttons"
                    }
                ]}
            />
            <div className="mlr-15">
                <div className="mb-15">
                    <div className="introduction" style={activeColor}>
                        Introduction
                    </div>
                    <div className="intro-detail">
                        <span className="chip">Button</span> is a custom button
                        react component handcrafted by our team.
                    </div>
                </div>

                <div className="sub-heading">You need to import below way.</div>
                <CodeLooker Code={customButtonImport} />
            </div>
            <div className="plr-15">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Solid
                            </div>
                            <div className="roe-card-body">
                                <SolidButton />
                                <CodeLooker Code={SolidButtonExampleSource} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Color
                                transition with no border
                            </div>
                            <div className="roe-card-body">
                                <NoBorderButton />
                                <CodeLooker
                                    Code={NoBorderButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Color
                                transition
                            </div>
                            <div className="roe-card-body">
                                <ColorTransitionButton />
                                <CodeLooker
                                    Code={ColorTransitionButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Disabled
                            </div>
                            <div className="roe-card-body">
                                <DisabledSolidButton />
                                <CodeLooker
                                    Code={DisabledSolidButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Sizing
                            </div>
                            <div className="roe-card-body">
                                <SizingSolidButton />
                                <CodeLooker
                                    Code={SizingSolidButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Loding Button
                            </div>
                            <div className="roe-card-body">
                                <LodingSolidButton />
                                <CodeLooker
                                    Code={LodingSolidButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Dash Bordered
                            </div>
                            <div className="roe-card-body">
                                <DashBorderedButton />
                                <CodeLooker
                                    Code={DashBorderedButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Dash Bordered
                                && Disabled
                            </div>
                            <div className="roe-card-body">
                                <DisabledDashButton />
                                <CodeLooker
                                    Code={DisabledDashButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Dash Bordered
                                && Sizing
                            </div>
                            <div className="roe-card-body">
                                <SizingDashButton />
                                <CodeLooker
                                    Code={SizingDashButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Loding Button
                            </div>
                            <div className="roe-card-body">
                                <LodingDashButton />
                                <CodeLooker
                                    Code={LodingDashButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Solid Rounded
                            </div>
                            <div className="roe-card-body">
                                <SolidRoundedButton />
                                <CodeLooker
                                    Code={SolidRoundedButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Outline Rounded
                            </div>
                            <div className="roe-card-body">
                                <OutlineRoundedButton />
                                <CodeLooker
                                    Code={OutlineRoundedButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Dashed Rounded
                            </div>
                            <div className="roe-card-body">
                                <DashedRoundedButton />
                                <CodeLooker
                                    Code={DashedRoundedButtonExampleSource}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="roe-card-style mtb-15">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Disabled Rounded
                            </div>
                            <div className="roe-card-body">
                                <DisabledRoundedButton />
                                <CodeLooker
                                    Code={DisabledRoundedButtonExampleSource}
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
)(Buttons);
