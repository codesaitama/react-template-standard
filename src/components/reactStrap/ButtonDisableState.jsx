import React from "react";
import { Button } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-button-block">
            <Button className="c-primary" size="lg" disabled>
                Primary button
            </Button>
            <Button className="c-secondary" size="lg" disabled>
                Button
            </Button>
        </div>
    );
};

export default Example;
