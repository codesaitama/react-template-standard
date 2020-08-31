import React, { useState } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <Dropdown
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
        >
            <DropdownToggle caret className="c-primary">
                This dropdown's menu is right-aligned
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
export default Example;
