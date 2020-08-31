import React from "react";
import PropTypes from "prop-types";
import {
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const propTypes = {
    addonType: PropTypes.oneOf(["prepend", "append"]).isRequired
};

const Example = ({ addonType }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <InputGroupButtonDropdown
            addonType={addonType}
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
        >
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </InputGroupButtonDropdown>
    );
};

Example.propTypes = propTypes;

export default Example;
