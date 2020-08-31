import React from "react";
import PropTypes from "prop-types";

const Marker = props => {
    const markerColor = {
        color: props.color
    };

    return (
        <div {...(props.onClick ? { onClick: props.onClick } : {})}>
            <i
                style={markerColor}
                className="fas fa-map-marker-alt map-marker-icon"
            />
        </div>
    );
};

Marker.defaultProps = {
    onClick: null,
    markerColor: "#161B1D"
};

Marker.propTypes = {
    onClick: PropTypes.func
};

export default Marker;
