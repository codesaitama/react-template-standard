import React from "react";
import { Badge } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-badge-block">
            <Badge href="#" className="pa-10 c-primary">
                Primary
            </Badge>

            <Badge href="#" className="pa-10 c-secondary">
                Secondary
            </Badge>

            <Badge href="#" className="pa-10 c-success">
                Success
            </Badge>

            <Badge href="#" className="pa-10 c-danger">
                Danger
            </Badge>

            <Badge href="#" className="pa-10 c-warning">
                Warning
            </Badge>

            <Badge href="#" className="pa-10 c-info">
                Info
            </Badge>

            <Badge href="#" className="pa-10 c-light">
                Light
            </Badge>

            <Badge href="#" className="pa-10 c-dark">
                Dark
            </Badge>
        </div>
    );
};

export default Example;
