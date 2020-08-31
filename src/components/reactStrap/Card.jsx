import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";
import { media1 } from "helper/constant";

const Example = () => {
    return (
        <div className="reactstrap-card-block">
            <Card>
                <CardImg top src={media1} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </CardText>
                    <Button className="c-primary mt-10">Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;
