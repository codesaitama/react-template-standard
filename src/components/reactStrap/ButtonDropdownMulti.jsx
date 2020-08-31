import React, { useState } from "react";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <ButtonDropdown
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
        >
            <DropdownToggle color={this.props.color} caret>
                {this.props.text}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default Example;
