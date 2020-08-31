/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import {
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap";

const Example = () => {
    return (
        <UncontrolledButtonDropdown>
            <DropdownToggle caret className="c-primary">Dropdown</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </UncontrolledButtonDropdown>
    );
};
export default Example;
