import React, { useState } from "react";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [btnDropSmall, setBtnDropSmall] = useState(false);

    return (
        <div className="reactstrap-button-block">
            <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={() => setDropdownOpen(!dropdownOpen)}
            >
                <DropdownToggle caret size="lg" className="c-warning">
                    Large Button
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
                isOpen={btnDropSmall}
                toggle={() => setBtnDropSmall(!btnDropSmall)}
            >
                <DropdownToggle caret size="sm" className="c-info">
                    Small Button
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    );
};

export default Example;
