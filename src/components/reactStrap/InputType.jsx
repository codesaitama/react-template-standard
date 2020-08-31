import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Example = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail6">Plain Text (Static)</Label>
                <Input
                    plaintext
                    value="Some plain text/ static value"
                    readOnly
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail5">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail5"
                    placeholder="with a placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword6">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="examplePassword6"
                    autoComplete="true"
                    placeholder="password placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUrl">Url</Label>
                <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="url placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleNumber">Number</Label>
                <Input
                    type="number"
                    name="number"
                    id="exampleNumber"
                    placeholder="number placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDatetime">Datetime</Label>
                <Input
                    type="datetime"
                    name="datetime"
                    id="exampleDatetime"
                    placeholder="datetime placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                    placeholder="time placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleColor">Color</Label>
                <Input
                    type="color"
                    name="color"
                    id="exampleColor"
                    placeholder="color placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSearch">Search</Label>
                <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="search placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect3">Select</Label>
                <Input type="select" name="select" id="exampleSelect3">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelectMulti3">Select Multiple</Label>
                <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti3"
                    multiple
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="3">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText3" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile3">File</Label>
                <Input type="file" name="file" id="exampleFile3" />
                <FormText color="muted">
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                </FormText>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="radio" /> Option one is this and that—be sure
                    to include why it's great
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> Check me out
                </Label>
            </FormGroup>
        </Form>
    );
};

export default Example;
