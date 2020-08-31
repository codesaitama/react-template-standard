import React from 'react';
import Button from 'components/button/Button';

const OutlineRoundedButton = () => {
    return (
        <div>
            <Button className="c-btn ma-5 c-rounded c-outline-primary">Primary</Button>
            <Button className="c-btn ma-5 c-rounded c-outline-secondary">Secondary</Button>
            <Button className="c-btn ma-5 c-rounded c-outline-info">Info </Button>
            <Button className="c-btn ma-5 c-rounded c-outline-warning">Warning</Button>
            <Button className="c-btn ma-5 c-rounded c-outline-danger">Danger</Button>
            <Button className="c-btn ma-5 c-rounded c-outline-focus">Focus</Button>
            <Button className="c-btn ma-5 c-rounded c-outline-light">Light</Button>
            <Button className="c-btn ma-5 c-rounded c-outline-dark">Dark</Button>
        </div>
    )
}

export default OutlineRoundedButton;