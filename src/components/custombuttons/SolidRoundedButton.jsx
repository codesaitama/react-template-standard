import React from 'react';
import Button from 'components/button/Button';


const SolidRoundedButton = () => {
    return (
        <div>
            <Button className="c-btn ma-5 c-rounded c-primary">Primary</Button>
            <Button className="c-btn ma-5 c-rounded c-secondary">Secondary</Button>
            <Button className="c-btn ma-5 c-rounded c-info">Info </Button>
            <Button className="c-btn ma-5 c-rounded c-success">success </Button>
            <Button className="c-btn ma-5 c-rounded c-warning">Warning</Button>
            <Button className="c-btn ma-5 c-rounded c-danger">Danger</Button>
            <Button className="c-btn ma-5 c-rounded c-focus">Focus</Button>
            <Button className="c-btn ma-5 c-rounded c-light">Light</Button>
            <Button className="c-btn ma-5 c-rounded c-dark">Dark</Button>
        </div>
    )
}

export default SolidRoundedButton;