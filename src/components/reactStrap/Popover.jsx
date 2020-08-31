/* eslint import/no-webpack-loader-syntax: off */
import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const Example = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    return (
        <div>
            <Button id="Popover1" type="button" className="c-primary">
                Launch Popover
            </Button>
            <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="Popover1"
                toggle={() => setPopoverOpen(!popoverOpen)}
            >
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </PopoverBody>
            </Popover>
        </div>
    );
};
export default Example;
