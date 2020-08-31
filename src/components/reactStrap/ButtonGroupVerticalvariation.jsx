import React, { useState } from "react";
import {
    ButtonDropdown,
    Button,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    ButtonGroup
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
            <ButtonGroup vertical>
                <Button className="c-primary">1</Button>
                <Button className="c-primary">2</Button>
                <ButtonDropdown
                    isOpen={dropdownOpen}
                    toggle={() => setDropdownOpen(!dropdownOpen)}
                >
                    <DropdownToggle caret className="c-primary">
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Dropdown Link</DropdownItem>
                        <DropdownItem>Dropdown Link</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </ButtonGroup>
        </div>
    );
};
export default Example;
