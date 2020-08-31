import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const Example = () => {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/dropdowns">Inactive Link</NavLink>
                </NavItem>
                <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a" className="nav-link" caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag="a" href="/dropdowns" active>
                            Link
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    );
};

export default Example;
