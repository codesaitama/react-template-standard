import React from "react";
import { Button } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-button-block">
            <Button className="c-primary">primary</Button>

            <Button className="c-secondary">secondary</Button>

            <Button className="c-success">success</Button>

            <Button className="c-info">info</Button>

            <Button className="c-warning">warning</Button>

            <Button className="c-danger">danger</Button>

            <Button className="c-link">link</Button>
        </div>
    );
};
export default Example;
