import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import { media7 } from "helper/constant";

const Example = () => {
    return (
        <div className="card-alignment-block">
            <Card inverse>
                <CardImg width="100%" src={media7} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default Example;
