import React from 'react';
import Button from 'components/button/Button';

const DisabledSolidButton = () => {
    return (
        <div>
            <Button disabled className="c-btn ma-5 c-primary">Primary</Button>
            <Button disabled className="c-btn ma-5 c-secondary">Secondary</Button>
            <Button disabled className="c-btn ma-5 c-info">Info </Button>
            <Button disabled className="c-btn ma-5 c-success">success </Button>
            <Button disabled className="c-btn ma-5 c-warning">Warning</Button>
            <Button disabled className="c-btn ma-5 c-danger">Danger</Button>
            <Button disabled className="c-btn ma-5 c-focus">Focus</Button>
            <Button disabled className="c-btn ma-5 c-light">Light</Button>
            <Button disabled className="c-btn ma-5 c-dark">Dark</Button>
            <Button disabled className="c-btn ma-5 c-link">Link</Button>
        </div>
    )
}

export default DisabledSolidButton;