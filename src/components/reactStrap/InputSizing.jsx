import React from "react";
import { Form, Input } from "reactstrap";

const Example = () => {
    return (
        <Form>
            <Input placeholder="lg" bsSize="lg" className="mb-10" />
            <Input placeholder="default" className="mb-10" />
            <Input placeholder="sm" bsSize="sm" className="mb-10" />
            <Input type="select" bsSize="lg" className="mb-10">
                <option>Large Select</option>
            </Input>
            <Input type="select" className="mb-10">
                <option>Default Select</option>
            </Input>
            <Input type="select" bsSize="sm" className="mb-10">
                <option>Small Select</option>
            </Input>
        </Form>
    );
};
export default Example;
