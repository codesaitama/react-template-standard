import React, { useState, useMemo } from 'react';
import { Modal, ModalBody } from "reactstrap";


const AddFolderDialog = props => {
    const [name, setName] = useState("");
    const { modal, setmodal, className, createFolderHandler, renameFolder, renameFolderHandler } = props;
    useMemo(() => {
        if(renameFolder) {
            setName(renameFolder.name);
        } else {
            setName("");
        }
    }, [renameFolder])
    return (
        <Modal
            centered
            isOpen={modal}
            toggle={setmodal}
            className={className}
            size="sm"
            fade={false}
        >
            <ModalBody className="media-modal-body">
                <div className="fs-16 bold-text text-center">
                    { renameFolder ? 'Rename a Folder' : 'Create a Folder' }
                </div>
                <div className="ptb-10">
                    <input
                        type="text"
                        className="form-control react-form-input fs-16 medium-text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Enter folder name"
                    />
                </div>
                <div className="text-center">
                    {
                        renameFolder ?
                        <button className="c-btn c-success fill-width" onClick={() => renameFolderHandler(name)}>Rename</button> :
                        <button className="c-btn c-success fill-width" onClick={() => {createFolderHandler(name);setName('')}}>Create</button>
                    }
                </div>
            </ModalBody>
        </Modal>
    );
};

export default AddFolderDialog;