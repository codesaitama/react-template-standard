import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

const Example = () => {
    return (
        <div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button className="c-primary">To the Left!</Button>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                    <Button className="c-secondary">To the Right!</Button>
                </InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button className="c-danger">To the Left!</Button>
                </InputGroupAddon>
                <Input placeholder="and..." />
                <InputGroupAddon addonType="append">
                    <Button className="c-success">To the Right!</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default Example;
