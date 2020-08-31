import React from "react";
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBody
} from "reactstrap";
import { media2, media3, media4 } from "helper/constant";

const Example = () => {
    return (
        <CardColumns>
            <Card>
                <CardImg top width="100%" src={media2} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </CardText>
                    <Button className="c-primary mt-10">Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={media3} alt="Card image cap" />
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                        This card has supporting text below as a natural lead-in
                        to additional content.
                    </CardText>
                    <Button className="c-primary mt-10">Button</Button>
                </CardBody>
            </Card>
            <Card
                body
                inverse
                style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                </CardText>
                <Button className="c-primary mt-10">Button</Button>
            </Card>
            <Card>
                <CardImg top width="100%" src={media4} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                    </CardText>
                    <Button className="c-primary mt-10">Button</Button>
                </CardBody>
            </Card>
            <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                </CardText>
                <Button className="c-dark mt-10">Button</Button>
            </Card>
        </CardColumns>
    );
};

export default Example;
