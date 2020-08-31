import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Example = () => {
    return (
        <div className="card-alignment-block">
            <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                </CardText>
                <Button className="c-primary">Go somewhere</Button>
            </Card>
            <Card body className="text-center">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                </CardText>
                <Button>Go somewhere</Button>
            </Card>
            <Card body className="text-right">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                </CardText>
                <Button className="c-success">Go somewhere</Button>
            </Card>
        </div>
    );
};

export default Example;
