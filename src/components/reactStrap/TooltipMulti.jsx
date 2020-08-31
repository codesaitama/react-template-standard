/* eslint import/no-webpack-loader-syntax: off */

import React, { useState } from "react";
import { Button, Tooltip } from "reactstrap";

const TooltipItem = props => {
    const [tooltipOpen, settTooltipOpen] = useState(false);

    return (
        <span className="doc-description">
            <Button
                className="c-primary mr-10"
                id={"Tooltip-" + props.id}
            >
                {props.item.text}
            </Button>
            <Tooltip
                placement={props.item.placement}
                isOpen={tooltipOpen}
                target={"Tooltip-" + props.id}
                toggle={() => settTooltipOpen(!tooltipOpen)}
            >
                Tooltip Content!
            </Tooltip>
        </span>
    );
};

const TooltipExampleMulti = () => {
    const [tooltips] = useState([
        {
            placement: "top",
            text: "Top"
        },
        {
            placement: "bottom",
            text: "Bottom"
        },
        {
            placement: "left",
            text: "Left"
        },
        {
            placement: "right",
            text: "Right"
        }
    ]);

    return (
        <div>
            {tooltips.map((tooltip, i) => {
                return <TooltipItem key={i} item={tooltip} id={i} />;
            })}
        </div>
    );
};

export default TooltipExampleMulti;
