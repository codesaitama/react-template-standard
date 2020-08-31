import React from "react";
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from "reactstrap";

const Example = () => {
    return (
        <div className="list-group-block">
            <ListGroup>
                <ListGroupItem active>
                    <ListGroupItemHeading>
                        List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>
                        List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>
                        List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                    </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};
export default Example;
