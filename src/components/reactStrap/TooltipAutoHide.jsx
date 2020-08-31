/* eslint import/no-webpack-loader-syntax: off */
import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const Example = () => {
    const [tooltipOpen, settTooltipOpen] = useState(false);
    return (
        <div className="doc-description">
            <p>
                Sometimes you need to allow users to select text within a{" "}
                <span
                    style={{ textDecoration: "underline", color: "blue" }}
                    href="#"
                    id="DisabledAutoHideExample"
                >
                    tooltip
                </span>
                .
            </p>
            <Tooltip
                placement="top"
                isOpen={tooltipOpen}
                autohide={false}
                target="DisabledAutoHideExample"
                toggle={() => settTooltipOpen(!tooltipOpen)}
            >
                Try to select this text!
            </Tooltip>
        </div>
    );
};
export default Example;
