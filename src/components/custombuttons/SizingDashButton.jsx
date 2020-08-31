import React from 'react';
import Button from 'components/button/Button';

const SizingDashButton = () => {
    return (
        <div>
            <Button className="c-btn ma-5 c-outline-primary c-btn-dashed c-btn-lg c-btn-wide">Wider Large</Button>
            <Button className="c-btn ma-5 c-outline-secondary c-btn-dashed c-btn-lg">Large</Button>
            <Button className="c-btn ma-5 c-outline-warning c-btn-dashed c-btn-wide">Wider Normal</Button>
            <Button className="c-btn ma-5 c-outline-danger c-btn-dashed">Normal</Button>
            <Button className="c-btn ma-5 c-outline-info c-btn-dashed c-btn-sm c-btn-wide">Wider small</Button>
            <Button className="c-btn ma-5 c-outline-light c-btn-dashed c-btn-sm">Small</Button>
        </div>
    )
}

export default SizingDashButton;