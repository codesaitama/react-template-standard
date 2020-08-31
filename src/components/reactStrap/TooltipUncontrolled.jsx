/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { UncontrolledTooltip } from "reactstrap";

const Example = () => {
    return (
        <div className="doc-description">
            <p>
                Somewhere in here is a{" "}
                <span
                    style={{ textDecoration: "underline", color: "blue" }}
                    href="#"
                    id="UncontrolledTooltipExample"
                >
                    tooltip
                </span>
                .
            </p>
            <UncontrolledTooltip
                placement="right"
                target="UncontrolledTooltipExample"
            >
                Hello world!
            </UncontrolledTooltip>
        </div>
    );
};
export default Example;
