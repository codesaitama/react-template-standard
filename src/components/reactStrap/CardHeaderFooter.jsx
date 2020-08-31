import React from "react";
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
} from "reactstrap";

const Example = () => {
    return (
        <div className="card-alignment-block">
            <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-primary mt-10">Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>

            <Card>
                <CardHeader tag="h3">Featured</CardHeader>
                <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CardText>
                    <Button className="c-primary mt-10">Go somewhere</Button>
                </CardBody>
                <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
        </div>
    );
};

export default Example;
