import React from 'react';
import { Modal, ModalBody } from "reactstrap";


const MediaDialog = props => {
    const { modal, setmodal, className, currentMedia } = props
    return (
        <Modal
            centered
            isOpen={modal}
            toggle={setmodal}
            className={className}
            size="lg"
            fade={false}
        >
            <ModalBody className="media-modal-body">
                {
                    currentMedia && 
                    <img src={currentMedia.file} alt="media"/>
                }
            </ModalBody>
        </Modal>
    );
};

export default MediaDialog;