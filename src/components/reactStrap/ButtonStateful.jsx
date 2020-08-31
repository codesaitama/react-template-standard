import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const Example = () => {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState([]);

    const onCheckboxBtnClick = selected => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="doc-title">Radio Buttons</div>
                <ButtonGroup>
                    <Button
                        className="c-primary"
                        onClick={() => setRSelected(1)}
                        active={rSelected === 1}
                    >
                        One
                    </Button>

                    <Button
                        className="c-primary"
                        onClick={() => setRSelected(2)}
                        active={rSelected === 2}
                    >
                        Two
                    </Button>

                    <Button
                        className="c-primary"
                        onClick={() => setRSelected(3)}
                        active={rSelected === 3}
                    >
                        Three
                    </Button>
                </ButtonGroup>
                <p className="mtb-10">Selected: {rSelected}</p>
            </div>

            <div className="col-md-6">
                <div className="doc-title">Checkbox Buttons</div>
                <ButtonGroup>
                    <Button
                        className="c-primary"
                        onClick={() => onCheckboxBtnClick(1)}
                        active={cSelected.includes(1)}
                    >
                        One
                    </Button>

                    <Button
                        className="c-primary"
                        onClick={() => onCheckboxBtnClick(2)}
                        active={cSelected.includes(2)}
                    >
                        Two
                    </Button>

                    <Button
                        className="c-primary"
                        onClick={() => onCheckboxBtnClick(3)}
                        active={cSelected.includes(3)}
                    >
                        Three
                    </Button>
                </ButtonGroup>
                <p className="mtb-10">Selected: {JSON.stringify(cSelected)}</p>
            </div>
        </div>
    );
};

export default Example;
