import React from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

const Example = () => {
    return (
        <div className="list-group-block">
            <ListGroup>
                <ListGroupItem className="justify-content-between">
                    Cras justo odio <Badge className="c-primary" pill>14</Badge>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between">
                    Dapibus ac facilisis in <Badge className="c-primary" pill>2</Badge>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between">
                    Morbi leo risus <Badge className="c-primary" pill>1</Badge>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};
export default Example;
