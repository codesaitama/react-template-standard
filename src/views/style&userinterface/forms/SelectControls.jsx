import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import BasicCheckbox from "components/forms/selectControls/BasicCheckbox";
import AnimationsCheckbox from "components/forms/selectControls/AnimationsCheckbox";
import ColorsCheckbox from "components/forms/selectControls/ColorsCheckbox";
import DisableCheckbox from "components/forms/selectControls/DisableCheckbox";
import IconCheckbox from "components/forms/selectControls/IconCheckbox";
import RadioButtonColors from "components/forms/selectControls/RadioButtonColors";
import RadioButtons from "components/forms/selectControls/RadioButtons";
import SvgCheckbox from "components/forms/selectControls/SvgCheckbox";
import Switch from "components/forms/selectControls/Switch";
import ToggleCheckbox from "components/forms/selectControls/ToggleCheckbox";

const SelectControls = () => {
    return (
        <div className="checkbox-text">
            <PageTitle
                title="sidebar.selectcontrols"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.forms"
                    },
                    {
                        name: "sidebar.selectcontrols"
                    }
                ]}
            />
            <div>
                <div className="row mlr-0" style={{marginTop: '-15px'}}>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Basic checkbox
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    These are simple checkboxes with three
                                    shapes.
                                </div>
                                <BasicCheckbox />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Switch
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    These are iOS style awesome switches.
                                </div>
                                <Switch />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Colors
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    There are five colors of beautiful
                                    checkboxes with different shapes.
                                </div>
                                <ColorsCheckbox />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Svg
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    You can add any svg to replace basic
                                    checkbox styles
                                </div>
                                <SvgCheckbox />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Animations
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    These are animated checkboxes.
                                </div>
                                <AnimationsCheckbox />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Toggle
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    Toggles are simple show / hide type.
                                </div>
                                <ToggleCheckbox />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Disable
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    These are disable checkboxes.
                                </div>
                                <DisableCheckbox />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Radio buttons
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    Styling radio buttons are very similar to
                                    checkbox. All those features mentioned
                                    above, will work for radio buttons.
                                </div>
                                <RadioButtons />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>Radio button
                                Colors
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    There are five colors of beautiful radio
                                    buttons like checkboxes.
                                </div>
                                <RadioButtonColors />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span>icons
                            </div>
                            <div className="roe-card-body">
                                <div className="roe-card-description">
                                    You can add any icon to replace checkbox
                                    styles.
                                </div>
                                <IconCheckbox />
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
)(SelectControls);
