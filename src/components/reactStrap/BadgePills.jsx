import React from "react";
import { Badge } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-badge-block">
            <Badge className="pa-10 c-primary" pill>
                Primary
            </Badge>

            <Badge className="pa-10 c-secondary" pill>
                Secondary
            </Badge>

            <Badge className="pa-10 c-success" pill>
                Success
            </Badge>

            <Badge className="pa-10 c-danger" pill>
                Danger
            </Badge>

            <Badge className="pa-10 c-warning" pill>
                Warning
            </Badge>

            <Badge className="pa-10 c-info" pill>
                Info
            </Badge>

            <Badge className="pa-10 c-light" pill>
                Light
            </Badge>

            <Badge className="pa-10 c-dark" pill>
                Dark
            </Badge>
        </div>
    );
};

export default Example;
