import React, { useState } from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);

    return (
        <div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button className="c-primary">I'm a button</Button>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <Input />
                <InputGroupButtonDropdown
                    addonType="append"
                    isOpen={dropdownOpen}
                    toggle={() => setDropdownOpen(!dropdownOpen)}
                >
                    <DropdownToggle caret className="c-primary">Button Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupButtonDropdown
                    addonType="prepend"
                    isOpen={splitButtonOpen}
                    toggle={() => setSplitButtonOpen(!splitButtonOpen)}
                >
                    <Button className="c-outline-primary">Split Button</Button>
                    <DropdownToggle split className="c-outline-primary" />
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input placeholder="and..." />
                <InputGroupAddon addonType="append">
                    <Button className="c-primary">I'm a button</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};
export default Example;
