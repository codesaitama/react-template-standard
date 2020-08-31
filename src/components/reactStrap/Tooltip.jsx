/* eslint import/no-webpack-loader-syntax: off */
import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const Example = () => {
    const [tooltipOpen, settTooltipOpen] = useState(false);
    return (
        <div className="doc-description">
            <p>
                Somewhere in here is a{" "}
                <span
                    style={{ textDecoration: "underline", color: "blue" }}
                    href="#"
                    id="TooltipExample"
                >
                    tooltip
                </span>
                .
            </p>
            <Tooltip
                placement="right"
                isOpen={tooltipOpen}
                target="TooltipExample"
                toggle={() => settTooltipOpen(!tooltipOpen)}
            >
                Hello world!
            </Tooltip>
        </div>
    );
};
export default Example;
