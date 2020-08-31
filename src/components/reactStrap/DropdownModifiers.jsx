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
            <DropdownToggle className="c-primary">Dropdown</DropdownToggle>
            <DropdownMenu
                modifiers={{
                    setMaxHeight: {
                        enabled: true,
                        order: 890,
                        fn: data => {
                            return {
                                ...data,
                                styles: {
                                    ...data.styles,
                                    overflow: "auto",
                                    maxHeight: 100
                                }
                            };
                        }
                    }
                }}
            >
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default Example;
