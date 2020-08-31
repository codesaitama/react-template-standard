import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Example = () => {
    return (
        <div className="list-group-block">
            <ListGroup>
                <ListGroupItem className="c-primary">Cras justo odio</ListGroupItem>
                <ListGroupItem className="c-secondary">
                    Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem className="c-warning">Morbi leo risus</ListGroupItem>
                <ListGroupItem className="c-danger">
                    Porta ac consectetur ac
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};
export default Example;
