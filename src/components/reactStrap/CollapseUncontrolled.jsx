import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const Example = () => (
    <div>
        <Button className="c-primary" id="toggler" style={{ marginBottom: "10px" }}>
            Toggle
        </Button>
        <UncontrolledCollapse toggler="#toggler">
            <Card>
                <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>
);

export default Example;
