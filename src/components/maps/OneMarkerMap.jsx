import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "components/maps/Marker";

const OneMarkerMap = props => {
    return (
        <div className="map-block">
            <GoogleMapReact
                bootstrapURLKeys={{ key: props.ApiKey }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
                <Marker
                    lat={props.center.lat}
                    lng={props.center.lng}
                />
            </GoogleMapReact>
        </div>
    );
};

export default OneMarkerMap;
