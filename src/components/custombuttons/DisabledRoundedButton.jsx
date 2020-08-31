import React from 'react';
import Button from 'components/button/Button';

const DisabledRoundedButton = () => {
    return (
        <div>
            <Button disabled className="c-btn ma-5 c-rounded c-primary">Primary</Button>
            <Button disabled className="c-btn ma-5 c-rounded c-secondary">Secondary</Button>
            <Button disabled className="c-btn ma-5 c-rounded c-info">Info </Button>
            <Button disabled className="c-btn ma-5 c-rounded c-warning">Warning</Button>
            <Button disabled className="c-btn ma-5 c-rounded c-danger">Danger</Button>
            <Button disabled className="c-btn ma-5 c-rounded c-focus">Focus</Button>
            <Button disabled className="c-btn ma-5 c-rounded c-light">Light</Button>
            <Button disabled className="c-btn ma-5 c-rounded c-dark">Dark</Button>
        </div>
    )
}

export default DisabledRoundedButton;