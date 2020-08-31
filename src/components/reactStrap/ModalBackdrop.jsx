/* eslint import/no-webpack-loader-syntax: off */

import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup
} from "reactstrap";

const ModalExample = ({ className }) => {
    const [modal, setmodal] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const changeBackdrop = e => {
        let value = e.target.value;
        if (value !== "static") {
            value = JSON.parse(value);
        }
        setBackdrop(value);
    };

    return (
        <div>
            <Form inline onSubmit={e => e.preventDefault()}>
                <FormGroup>
                    <Label className="mr-10" for="backdrop">
                        Backdrop value
                    </Label>
                    <Input
                        type="select"
                        name="backdrop"
                        id="backdrop"
                        onChange={changeBackdrop}
                    >
                        <option value="true">true</option>
                        <option value="false">false</option>
                        <option value="static">"static"</option>
                    </Input>
                </FormGroup>
            </Form>
            <div className="mt-10">
                <Button className="c-primary"  onClick={() => setmodal(!modal)}>
                    Launch Modal
                </Button>
            </div>
            <Modal
                isOpen={modal}
                toggle={() => setmodal(!modal)}
                className={className}
                backdrop={backdrop}
            >
                <ModalHeader toggle={() => setmodal(!modal)}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button className="c-primary"  onClick={() => setmodal(!modal)}>
                        Do Something
                    </Button>
                    <Button className="c-secondary" onClick={() => setmodal(!modal)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalExample;
