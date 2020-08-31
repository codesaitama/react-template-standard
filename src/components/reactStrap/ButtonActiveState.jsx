import React from "react";
import { Button } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-button-block">
            <Button className="c-primary" size="lg" active>
                Primary link
            </Button>
            <Button className="c-secondary" size="lg" active>
                Link
            </Button>
        </div>
    );
};

export default Example;
