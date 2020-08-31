import React from "react";
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

const Example = () => {
    return (
        <Form>
            <FormGroup row>
                <Label for="exampleEmail8" sm={2}>
                    Email
                </Label>
                <Col sm={10}>
                    <Input
                        autoComplete="true"
                        type="email"
                        name="email"
                        id="exampleEmail8"
                        placeholder="with a placeholder"
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="examplePassword3" sm={2}>
                    Password
                </Label>
                <Col sm={10}>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword3"
                        placeholder="password placeholder"
                        autoComplete="true"
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="exampleSelect2" sm={2}>
                    Select
                </Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect2" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="exampleSelectMulti2" sm={2}>
                    Select Multiple
                </Label>
                <Col sm={10}>
                    <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti2"
                        multiple
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="exampleText2" sm={2}>
                    Text Area
                </Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText2" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="exampleFile2" sm={2}>
                    File
                </Label>
                <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile2" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the
                        above input. It's a bit lighter and easily wraps to a
                        new line.
                    </FormText>
                </Col>
            </FormGroup>

            <FormGroup tag="fieldset" row>
                <legend className="col-form-label col-sm-2">
                    Radio Buttons
                </legend>
                <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2" /> Option one is
                            this and that—be sure to include why it's great
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2" /> Option two can
                            be something else and selecting it will deselect
                            option one
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio2" disabled /> Option
                            three is disabled
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
        </Form>
    );
};
export default Example;
