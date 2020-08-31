import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { media3 } from "helper/constant";

const Example = () => {
    return (
        <div className="reactstrap-card-block">
            <div className="row">
                <div className="col-lg-6 ptb-10">
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src={media3}
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </CardText>
                            <CardText>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-lg-6 ptb-10">
                    <Card>
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </CardText>
                            <CardText>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </CardText>
                        </CardBody>
                        <CardImg
                            bottom
                            width="100%"
                            src={media3}
                            alt="Card image cap"
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;
