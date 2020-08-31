import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";

const GridSystem = () => {
    return (
        <div>
            <PageTitle
                title="sidebar.gridsystem"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.uicomponents"
                    },
                    {
                        name: "sidebar.gridsystem"
                    }
                ]}
            />
            <div>
                <div className="row mlr-0" style={{marginTop: '-15px'}}>
                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> SM Grid
                                Collapsed at 576px
                            </div>
                            <div className="roe-card-body">
                                <div className="row ma-0">
                                    <div className="col-sm-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-sm-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-sm-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-sm-4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> MD Grid
                                Collapsed at 768px
                            </div>
                            <div className="roe-card-body">
                                <div className="row ma-0">
                                    <div className="col-md-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-md-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-md-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-md-4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> LG Grid
                                Collapsed at 992px
                            </div>
                            <div className="roe-card-body">
                                <div className="row ma-0">
                                    <div className="col-lg-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-lg-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-lg-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-lg-4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> XL Grid
                                Collapsed at 1200px
                            </div>
                            <div className="roe-card-body">
                                <div className="row ma-0">
                                    <div className="col-xl-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-xl-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-xl-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-xl-4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Mixed Grid
                                Showing different sizes on different screens
                            </div>
                            <div className="roe-card-body">
                                <div className="row ma-0">
                                    <div className="col-sm-6 col-lg-3 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-sm-6 .col-lg-3
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-sm-6 .col-lg-3
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-sm-6 .col-lg-3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header">
                                <span className="hash"># </span> Mixed Grid
                                Showing different sizes on different screens
                            </div>
                            <div className="roe-card-body">
                                <div className="row">
                                    <div className="col-md-4 mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-md-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 ml-auto mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-md-4 .ml-auto
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 ml-md-auto mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-md-4 .ml-md-auto
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 ml-md-auto mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-md-4 .ml-md-auto
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-auto mr-auto mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-auto .mr-auto
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-10">
                                        <div className="roe-card-style">
                                            <div className="roe-card-header">
                                                .col-auto
                                            </div>
                                        </div>
                                    </div>
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
)(GridSystem);
