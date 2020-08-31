import React from "react";
import { Button } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-button-block">
            <Button className="c-outline-primary">
                primary
            </Button>

            <Button className="c-outline-secondary">
                secondary
            </Button>

            <Button className="c-outline-success">
                success
            </Button>

            <Button className="c-outline-info">
                info
            </Button>

            <Button className="c-outline-warning">
                warning
            </Button>

            <Button className="c-outline-danger">
                danger
            </Button>
        </div>
    );
};
export default Example;
