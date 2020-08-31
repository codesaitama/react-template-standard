import React from "react";
import GoogleMapReact from "google-map-react";

const DefaultMap = props => {
    return (
        <div className="map-block">
            <GoogleMapReact
                bootstrapURLKeys={{ key: props.ApiKey }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            />
        </div>
    );
};

export default DefaultMap;
