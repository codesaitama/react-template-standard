import React from 'react';
import Button from 'components/button/Button';

const LodingDashButton = () => {
    return (
        <div>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-outline-primary c-btn-dashed" 
                dataStyle="expand-left"
            >
                Expand Left
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-outline-secondary c-btn-dashed" 
                dataStyle="expand-right"
            >
                Expand Right
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-outline-info c-btn-dashed" 
                dataStyle="middle"
            >
                Middle
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-outline-warning c-btn-dashed" 
                dataStyle="expand-up"
            >
                Expand Up
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-outline-dark c-btn-dashed" 
                dataStyle="expand-down"
            >
                Expand Down
            </Button>
        </div>
    )
}

export default LodingDashButton;