import React from 'react';
import { Button, ButtonGroup} from 'reactstrap';

const Example = () => (
    <div>
        <div className="mb-10">
            <ButtonGroup size="lg">
                <Button className="c-outline-primary">Left</Button>
                <Button className="c-outline-secondary">Middle</Button>
                <Button className="c-outline-success">Right</Button>
            </ButtonGroup>
        </div>

        <div className="mb-10">
            <ButtonGroup>
                <Button className="c-outline-warning">Left</Button>
                <Button className="c-outline-info">Middle</Button>
                <Button className="c-outline-danger">Right</Button>
            </ButtonGroup>
        </div>

        <div className="mb-10">
            <ButtonGroup size="sm">
                <Button className="c-outline-primary">Left</Button>
                <Button className="c-outline-warning">Middle</Button>
                <Button className="c-outline-danger">Right</Button>
            </ButtonGroup>
        </div>
    </div>
);

export default Example;
