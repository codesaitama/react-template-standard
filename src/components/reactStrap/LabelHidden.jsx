import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Example = () => {
    return (
        <Form inline>
            <FormGroup>
                <Label for="exampleEmail7" hidden>
                    Email
                </Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail7"
                    placeholder="Email"
                    className="mr-10"
                />
            </FormGroup>{" "}
            <FormGroup>
                <Label for="examplePassword7" hidden>
                    Password
                </Label>
                <Input
                    type="password"
                    name="password"
                    id="examplePassword7"
                    placeholder="Password"
                    autoComplete="true"
                    className="mr-10"
                />
            </FormGroup>{" "}
            <Button className="c-primary">Submit</Button>
        </Form>
    );
};
export default Example;
