import React, { useState } from "react";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [btnDropsecondary, setBtnDropsecondary] = useState(false);
    const [btnDropsuccess, setBtnDropsuccess] = useState(false);

    return (
        <div className="reactstrap-button-block">
            <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={() => setDropdownOpen(!dropdownOpen)}
            >
                <DropdownToggle caret className="c-primary">
                    Primary
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
                isOpen={btnDropsecondary}
                toggle={() => setBtnDropsecondary(!btnDropsecondary)}
            >
                <DropdownToggle caret className="c-secondary">
                    Secondary
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
                isOpen={btnDropsuccess}
                toggle={() => setBtnDropsuccess(!btnDropsuccess)}
            >
                <DropdownToggle caret className="c-success">
                    Success
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    );
};

export default Example;
