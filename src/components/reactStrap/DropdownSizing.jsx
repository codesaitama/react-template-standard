import React, { useState } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [drpnormal, setDrpnormal] = useState(false);
    const [drpsm, setDrpsm] = useState(false);

    return (
        <div className="reactstrap-dropdown-block">
            <Dropdown
                group
                isOpen={dropdownOpen}
                size="lg"
                toggle={() => setDropdownOpen(!dropdownOpen)}
            >
                <DropdownToggle caret className="c-primary">Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown
                isOpen={drpnormal}
                toggle={() => setDrpnormal(!drpnormal)}
            >
                <DropdownToggle caret className="c-secondary">Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown
                group
                size="sm"
                isOpen={drpsm}
                toggle={() => setDrpsm(!drpsm)}
            >
                <DropdownToggle caret className="c-success">Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};
export default Example;
