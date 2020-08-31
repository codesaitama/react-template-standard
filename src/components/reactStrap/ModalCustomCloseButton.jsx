/* eslint import/no-webpack-loader-syntax: off */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = ({ className }) => {
    const [modal, setmodal] = useState(false);
    
    const closeBtn = (
        <button className="close" onClick={() => setmodal(!modal)}>
            &times;
        </button>
    );

    return (
        <div>
            <Button className="c-primary" onClick={() => setmodal(!modal)}>
                Launch Modal
            </Button>
            <Modal
                isOpen={modal}
                toggle={() => setmodal(!modal)}
                className={className}
            >
                <ModalHeader toggle={() => setmodal(!modal)} close={closeBtn}>
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
                    <Button className="c-primary" onClick={() => setmodal(!modal)}>
                        Do Something
                    </Button>{" "}
                    <Button className="c-secondary" onClick={() => setmodal(!modal)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalExample;
