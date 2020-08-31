import React, { useState } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import DefaultMap from "components/maps/DefaultMap";
import OneMarkerMap from "components/maps/OneMarkerMap";
import LightMap from "components/maps/LightMap";
import ShadeOfGrey from "components/maps/ShadeOfGrey";

const ApiKey = "AIzaSyDRbkCf-zFbUjLsY62KXua-1p-cVmrj6v0";

const GoogleMaps = () => {
    const [center] = useState({
        lat: 45.9432,
        lng: 24.9668
    });
    const [zoom] = useState(5);

    return (
        <div className="chart-container">
            <PageTitle
                title="sidebar.googlemaps"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.maps"
                    },
                    {
                        name: "sidebar.googlemaps"
                    }
                ]}
            />
            <div className="row ma-0">
                <div className="col-sm-12 pb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span> Default Map
                        </div>
                        <div className="roe-card-body">
                            <DefaultMap
                                center={center}
                                zoom={zoom}
                                ApiKey={ApiKey}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span> Using Marker
                        </div>
                        <div className="roe-card-body">
                            <OneMarkerMap
                                center={center}
                                zoom={zoom}
                                ApiKey={ApiKey}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span> Lighting Style
                        </div>
                        <div className="roe-card-body">
                            <LightMap
                                center={center}
                                zoom={zoom}
                                ApiKey={ApiKey}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span> Shade Of Grey
                        </div>
                        <div className="roe-card-body">
                            <ShadeOfGrey
                                center={center}
                                zoom={zoom}
                                ApiKey={ApiKey}
                                markerColor="#f6a821"
                            />
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
)(GoogleMaps);
