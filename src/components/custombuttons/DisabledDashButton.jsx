import React from 'react';
import Button from 'components/button/Button';

const DisabledDashButton = () => {
    return (
        <div>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-primary">Primary</Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-secondary">Secondary</Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-info">Info </Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-warning">Warning</Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-danger">Danger</Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-focus">Focus</Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-light">Light</Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-dark">Dark</Button>
            <Button disabled className="c-btn ma-5 c-btn-dashed c-outline-link">Link</Button>
        </div>
    )
}

export default DisabledDashButton;