import React from 'react';
import Button from 'components/button/Button';

const LodingSolidButton = () => {
    return (
        <div>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-primary" 
                dataStyle="expand-left"
            >
                Expand Left
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-secondary" 
                dataStyle="expand-right"
            >
                Expand Right
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-info" 
                dataStyle="middle"
            >
                Middle
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-warning" 
                dataStyle="expand-up"
            >
                Expand Up
            </Button>
            <Button 
                // onClick={this.buttonClick} 
                loading 
                className="c-btn ma-5 c-dark" 
                dataStyle="expand-down"
            >
                Expand Down
            </Button>
        </div>
    )
}

export default LodingSolidButton;