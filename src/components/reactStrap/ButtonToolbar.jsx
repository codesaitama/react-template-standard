import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";

const Example = () => {
    return (
        <div className="button-toolbar-block">
            <ButtonToolbar>
                <ButtonGroup>
                    <Button className="c-primary">1</Button>
                    <Button className="c-primary">2</Button>
                    <Button className="c-primary">3</Button>
                    <Button className="c-primary">4</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button className="c-secondary">5</Button>
                    <Button className="c-secondary">6</Button>
                    <Button className="c-secondary">7</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button className="c-warning">8</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
};

export default Example;
