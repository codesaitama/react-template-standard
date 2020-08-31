import React, { useState } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [btnDropleft, setBtnDropleft] = useState(false);
    const [btnDropright, setBtnDropright] = useState(false);

    return (
        <div className="reactstrap-dropdown-block">
            <Dropdown
                direction="up"
                isOpen={dropdownOpen}
                toggle={() => setDropdownOpen(!dropdownOpen)}
            >
                <DropdownToggle caret className="c-primary">Dropup</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Dropdown
                direction="left"
                isOpen={btnDropleft}
                toggle={() => setBtnDropleft(!btnDropleft)}
            >
                <DropdownToggle caret className="c-primary">Dropleft</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Dropdown
                direction="right"
                isOpen={btnDropright}
                toggle={() => setBtnDropright(!btnDropright)}
            >
                <DropdownToggle caret className="c-primary">Dropright</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};
export default Example;
