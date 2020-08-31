import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Example = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="doc-title">Anchors </div>
                    <ListGroup>
                        <ListGroupItem active tag="a" href="#" action>
                            Cras justo odio
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" action>
                            Dapibus ac facilisis in
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" action>
                            Morbi leo risus
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" action>
                            Porta ac consectetur ac
                        </ListGroupItem>
                        <ListGroupItem disabled tag="a" href="#" action>
                            Vestibulum at eros
                        </ListGroupItem>
                    </ListGroup>
                </div>
                <div className="col-lg-6">
                    <div className="doc-title">Buttons </div>
                    <ListGroup>
                        <ListGroupItem active tag="button" action>
                            Cras justo odio
                        </ListGroupItem>
                        <ListGroupItem tag="button" action>
                            Dapibus ac facilisis in
                        </ListGroupItem>
                        <ListGroupItem tag="button" action>
                            Morbi leo risus
                        </ListGroupItem>
                        <ListGroupItem tag="button" action>
                            Porta ac consectetur ac
                        </ListGroupItem>
                        <ListGroupItem disabled tag="button" action>
                            Vestibulum at eros
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};
export default Example;
