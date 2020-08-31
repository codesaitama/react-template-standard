import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const Example = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto doc-title">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler
                    onClick={() => setCollapsed(!collapsed)}
                    className="mr-2"
                />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default Example;
