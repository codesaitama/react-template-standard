import React, { useState } from "react";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [btnDropleft, setBtnDropleft] = useState(false);
    const [btnDropright, setBtnDropright] = useState(false);

    return (
        <div className="reactstrap-button-block">
            <ButtonDropdown
                direction="up"
                isOpen={dropdownOpen}
                toggle={() => setDropdownOpen(!dropdownOpen)}
            >
                <DropdownToggle caret className="c-primary">
                    Dropup
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
                direction="left"
                isOpen={btnDropleft}
                toggle={() => setBtnDropleft(!btnDropleft)}
            >
                <DropdownToggle caret className="c-secondary">
                    Dropleft
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
                direction="right"
                isOpen={btnDropright}
                toggle={() => setBtnDropright(!btnDropright)}
            >
                <DropdownToggle caret className="c-success">
                    Dropright
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
