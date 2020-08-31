/* eslint import/no-webpack-loader-syntax: off */

import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const PopoverItem = props => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return (
        <span>
            <Button
                className="mr-1 c-primary"
                id={"Popover-" + props.id}
                type="button"
            >
                {props.item.text}
            </Button>
            <Popover
                placement={props.item.placement}
                isOpen={popoverOpen}
                target={"Popover-" + props.id}
                toggle={() => setPopoverOpen(!popoverOpen)}
            >
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </PopoverBody>
            </Popover>
        </span>
    );
};

const PopoverExampleMulti = () => {
    const [popovers] = useState([
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
            {popovers.map((popover, i) => {
                return <PopoverItem key={i} item={popover} id={i} />;
            })}
        </div>
    );
};

export default PopoverExampleMulti;
