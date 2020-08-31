import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <Dropdown
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
        >
            <DropdownToggle
                tag="span"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
            >
                <span className="theme-color">Custom Dropdown Content</span>
            </DropdownToggle>
            <DropdownMenu>
                <div onClick={() => setDropdownOpen(!dropdownOpen)}>Custom dropdown item</div>
                <div onClick={() => setDropdownOpen(!dropdownOpen)}>Custom dropdown item</div>
                <div onClick={() => setDropdownOpen(!dropdownOpen)}>Custom dropdown item</div>
                <div onClick={() => setDropdownOpen(!dropdownOpen)}>Custom dropdown item</div>
            </DropdownMenu>
        </Dropdown>
    );
};

export default Example;