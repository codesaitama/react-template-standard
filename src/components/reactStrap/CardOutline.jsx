import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Example = () => {
    return (
        <div className="row">
            <div className="col-lg-6 ptb-15">
                <Card body outline className="c-outline-secondary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-dark">Button</Button>
                </Card>
            </div>
            <div className="col-lg-6 ptb-15">
                <Card body outline className="c-outline-warning">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-dark">Button</Button>
                </Card>
            </div>
            <div className="col-lg-6 ptb-15">
                <Card body outline className="c-outline-success">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-dark">Button</Button>
                </Card>
            </div>
            <div className="col-lg-6 ptb-15">
                <Card body outline className="c-outline-info">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-dark">Button</Button>
                </Card>
            </div>
        </div>
    );
};

export default Example;
