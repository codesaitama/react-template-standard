import React from "react";
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardSubtitle,
    CardBody
} from "reactstrap";
import { media7, media8, media1 } from "helper/constant";

const Example = () => {
    return (
        <CardDeck>
            <Card>
                <CardImg top width="100%" src={media1} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a card content.</CardText>
                    <Button className="c-primary mt-10">Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={media7} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a card content.</CardText>
                    <Button className="c-primary mt-10">Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={media8} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a card content.</CardText>
                    <Button className="c-primary mt-10">Button</Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default Example;
