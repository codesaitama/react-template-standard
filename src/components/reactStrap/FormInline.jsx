import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Example = () => {
    return (
        <Form inline className="inline-strap-form">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail3" className="mr-sm-2">
                    Email
                </Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail3"
                    placeholder="something@idk.cool"
                />
            </FormGroup>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword5" className="mr-sm-2">
                    Password
                </Label>
                <Input
                    type="password"
                    name="password"
                    id="examplePassword5"
                    placeholder="don't tell!"
                    autoComplete="true"
                />
            </FormGroup>
            <Button className="c-primary">Submit</Button>
        </Form>
    );
};
export default Example;
