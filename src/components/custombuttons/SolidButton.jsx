import React from 'react';
import Button from 'components/button/Button';

const SolidButton = () => {
    return (
        <div>
            <Button className="c-btn c-primary ma-5">Primary</Button>
            <Button className="c-btn ma-5 c-secondary">Secondary</Button>
            <Button className="c-btn ma-5 c-info">Info </Button>
            <Button className="c-btn ma-5 c-success">success </Button>
            <Button className="c-btn ma-5 c-warning">Warning</Button>
            <Button className="c-btn ma-5 c-danger">Danger</Button>
            <Button className="c-btn ma-5 c-focus">Focus</Button>
            <Button className="c-btn ma-5 c-light">Light</Button>
            <Button className="c-btn ma-5 c-dark">Dark</Button>
            <Button className="c-btn ma-5 c-link">Link</Button>
        </div>
    )
}

export default SolidButton;