import React from 'react';
import Button from 'components/button/Button';

const ColorTransitionButton = () => {
    return (
        <div>
            <Button className="c-btn c-outline-primary ma-5">Primary</Button>
            <Button className="c-btn ma-5 c-outline-secondary">Secondary</Button>
            <Button className="c-btn ma-5 c-outline-info">Info </Button>
            <Button className="c-btn ma-5 c-outline-success">success </Button>
            <Button className="c-btn ma-5 c-outline-warning">Warning</Button>
            <Button className="c-btn ma-5 c-outline-danger">Danger</Button>
            <Button className="c-btn ma-5 c-outline-focus">Focus</Button>
            <Button className="c-btn ma-5 c-outline-light">Light</Button>
            <Button className="c-btn ma-5 c-outline-dark">Dark</Button>
            <Button className="c-btn ma-5 c-outline-link">Link</Button>
        </div>
    )
}

export default ColorTransitionButton;