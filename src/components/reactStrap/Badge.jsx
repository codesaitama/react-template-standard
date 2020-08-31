import React from "react";
import { Badge } from "reactstrap";

const Example = () => {
    return (
        <div className="badges-heading-block">
            <h1 className="mb-10">
                Heading <Badge className="c-primary">New</Badge>
            </h1>

            <h2 className="mb-10">
                Heading <Badge className="c-secondary">New</Badge>
            </h2>

            <h3 className="mb-10">
                Heading <Badge className="c-success">New</Badge>
            </h3>

            <h4 className="mb-10">
                Heading <Badge className="c-danger">New</Badge>
            </h4>

            <h5 className="mb-10">
                Heading <Badge className="c-warning">New</Badge>
            </h5>

            <h6 className="mb-10">
                Heading <Badge className="c-dark">New</Badge>
            </h6>
        </div>
    );
};

export default Example;
