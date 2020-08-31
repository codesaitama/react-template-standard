import React, { useState } from "react";
import PropTypes from "prop-types";
import { Popover, PopoverBody } from "reactstrap";

const VehicleMarker = props => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const togglePopover = () => {
        setPopoverOpen(!popoverOpen);
    };

    const { pointDetail } = props;

    return (
        <div {...(props.onClick ? { onClick: props.onClick } : {})}>
            <i
                id={`popover${pointDetail.id}`}
                className="fas fa-shuttle-van map-marker-icon vehicle-icon-marker"
            />
            <Popover
                trigger="hover"
                placement="bottom"
                isOpen={popoverOpen}
                target={`popover${pointDetail.id}`}
                toggle={togglePopover}
                className="custom-map-popover"
            >
                <PopoverBody>
                    <div className="flex">
                        <i className="fas fa-shuttle-van fs--50 popover-vehicle" />
                        <div>
                            <div className="mtb--5 fs--16">
                                <span>Truck Name: </span>
                                <span>{pointDetail.truck_name}</span>
                            </div>
                            <div className="mtb--5 fs--16">
                                <span>Truck ID: </span>
                                <span>{pointDetail.truck_id}</span>
                            </div>
                            <div className="mtb--5 fs--16">
                                <span>Avg Speed: </span>
                                <span>{pointDetail.avg_speed}</span>
                            </div>
                        </div>
                    </div>
                </PopoverBody>
            </Popover>
        </div>
    );
};

VehicleMarker.defaultProps = {
    onClick: null
};

VehicleMarker.propTypes = {
    onClick: PropTypes.func
};

export default VehicleMarker;
