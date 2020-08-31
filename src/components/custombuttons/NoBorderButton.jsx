import React from 'react';
import Button from 'components/button/Button';

const NoBorderButton = () => {
    return (
        <div>
            <Button className="c-btn ma-5 no-border c-outline-primary">Primary</Button>
            <Button className="c-btn ma-5 no-border c-outline-secondary">Secondary</Button>
            <Button className="c-btn ma-5 no-border c-outline-info">Info </Button>                                
            <Button className="c-btn ma-5 no-border c-outline-success">success </Button>
            <Button className="c-btn ma-5 no-border c-outline-warning">Warning</Button>
            <Button className="c-btn ma-5 no-border c-outline-danger">Danger</Button>
            <Button className="c-btn ma-5 no-border c-outline-focus">Focus</Button>
            <Button className="c-btn ma-5 no-border c-outline-light">Light</Button>
            <Button className="c-btn ma-5 no-border c-outline-dark">Dark</Button>
            <Button className="c-btn ma-5 no-border c-outline-link">Link</Button>
        </div>
    )
}

export default NoBorderButton;