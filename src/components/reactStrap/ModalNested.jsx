/* eslint import/no-webpack-loader-syntax: off */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = ({ className }) => {
    const [modal, setmodal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => {
        setmodal(!modal)
    }

    const toggleNested = () => {
        setNestedModal(!nestedModal)
        setCloseAll(false)
    }

    const toggleAll = () => {
        setNestedModal(!nestedModal)
        setCloseAll(true)
    }

        return (
            <div>
                <Button className="c-primary" onClick={toggle}>
                    Launch Modal
                </Button>
                <Modal
                    isOpen={modal}
                    toggle={toggle}
                    className={className}
                >
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        <br />
                        <Button className="c-success" onClick={toggleNested}>
                            Show Nested Modal
                        </Button>
                        <Modal
                            isOpen={nestedModal}
                            toggle={toggleNested}
                            onClosed={
                                closeAll ? toggle : undefined
                            }
                        >
                            <ModalHeader>Nested Modal title</ModalHeader>
                            <ModalBody>Stuff and things</ModalBody>
                            <ModalFooter>
                                <Button
                                    className="c-primary"
                                    onClick={toggleNested}
                                >
                                    Done
                                </Button>{" "}
                                <Button
                                    className="c-secondary"
                                    onClick={toggleAll}
                                >
                                    All Done
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="c-primary" onClick={toggle}>
                            Do Something
                        </Button>{" "}
                        <Button className="c-secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

export default ModalExample;
