import React from "react";
import { Button } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-button-block">
            <div>
                {/* Large */}
                <Button className="c-primary" size="lg">
                    Large Button
                </Button>

                <Button className="c-secondary" size="lg">
                    Large Button
                </Button>
            </div>

            <div>
                {/* Small */}
                <Button className="c-success" size="sm">
                    Small Button
                </Button>

                <Button className="c-info" size="sm">
                    Small Button
                </Button>
            </div>

            {/* Block Level */}
            <Button className="c-warning" size="lg" block>
                Block level button
            </Button>
            <Button className="c-danger" size="lg" block>
                Block level button
            </Button>
        </div>
    );
};

export default Example;
