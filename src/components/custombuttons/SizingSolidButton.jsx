import React from 'react';
import Button from 'components/button/Button';

const SizingSolidButton = () => {
    return (
        <div>
            <Button className="c-btn ma-5 c-primary c-btn-lg c-btn-wide">Wider Large</Button>
            <Button className="c-btn ma-5 c-secondary c-btn-lg">Large</Button>
            <Button className="c-btn ma-5 c-warning c-btn-wide">Wider Normal</Button>
            <Button className="c-btn ma-5 c-danger">Normal</Button>
            <Button className="c-btn ma-5 c-info c-btn-sm c-btn-wide">Wider small</Button>
            <Button className="c-btn ma-5 c-light c-btn-sm">Small</Button>
        </div>
    )
}

export default SizingSolidButton;