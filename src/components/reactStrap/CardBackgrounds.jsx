import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Example = () => {
    return (
        <div className="row">
            <div className="col-lg-6 ptb-15">
                <Card body inverse className="c-secondary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="mt-10 c-dark">Button</Button>
                </Card>
            </div>

            <div className="col-lg-6 ptb-15">
                <Card body inverse className="c-primary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="mt-10 c-dark">Button</Button>
                </Card>
            </div>

            <div className="col-lg-6 ptb-15">
                <Card body inverse className="c-info">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="mt-10 c-primary">Button</Button>
                </Card>
            </div>

            <div className="col-lg-6 ptb-15">
                <Card body inverse className="c-danger">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="mt-10 c-light">Button</Button>
                </Card>
            </div>
        </div>
    );
};

export default Example;
