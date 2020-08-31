import React from "react";
import { Badge, Button } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-badge-button-block">
            <Button className="c-outline-primary" outline>
                Notifications <Badge className="c-primary">4</Badge>
            </Button>

            <Button className="c-outline-secondary" outline>
                Notifications <Badge className="c-secondary">4</Badge>
            </Button>

            <Button className="c-outline-success" outline>
                Notifications <Badge className="c-success">4</Badge>
            </Button>

            <Button className="c-outline-danger" outline>
                Notifications <Badge className="c-danger">4</Badge>
            </Button>

            <Button className="c-outline-warning" outline>
                Notifications <Badge className="c-warning">4</Badge>
            </Button>

            <Button className="c-outline-info" outline>
                Notifications <Badge className="c-info">4</Badge>
            </Button>
        </div>
    );
};

export default Example;
