import React, { useState } from "react";
import {
    ButtonDropdown,
    Button,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from "reactstrap";

const Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [btnDropwarning, setBtnDropwarning] = useState(false);
    const [btnDropdanger, setBtnDropdanger] = useState(false);

    return (
        <div className="reactstrap-splitbutton-drop-block">
            <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={() => setDropdownOpen(!dropdownOpen)}
            >
                <Button id="caret" className="c-info">
                    Info
                </Button>
                <DropdownToggle caret className="c-info" />
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
                isOpen={btnDropwarning}
                toggle={() => setBtnDropwarning(!btnDropwarning)}
            >
                <Button id="caret" className="c-warning">
                    Warning
                </Button>
                <DropdownToggle caret className="c-warning" />
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
                isOpen={btnDropdanger}
                toggle={() => setBtnDropdanger(!btnDropdanger)}
            >
                <Button id="caret" className="c-danger">
                    Info
                </Button>
                <DropdownToggle caret className="c-danger" />
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
