import React from 'react';
import Button from 'components/button/Button';

const DashedRoundedButton = () => {
    return (
        <div>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-primary">Primary</Button>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-secondary">Secondary</Button>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-info">Info </Button>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-warning">Warning</Button>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-danger">Danger</Button>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-focus">Focus</Button>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-light">Light</Button>
            <Button className="c-btn ma-5 c-rounded c-btn-dashed c-outline-dark">Dark</Button>
        </div>
    )
}

export default DashedRoundedButton;