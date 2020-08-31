import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const Example = () => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-primary">Go somewhere</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-secondary">Go somewhere</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default Example;
