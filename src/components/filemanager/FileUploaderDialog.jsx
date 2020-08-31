import React, { Fragment } from 'react';
import { Modal, ModalBody } from "reactstrap";
import Dropzone from "react-dropzone";


const FileUploaderDialog = props => {
    const { modal, setmodal, className, acceptedFile, uploadedFileDetail, maxSize, uploadFileHandler } = props
    return (
        <Modal
            centered
            isOpen={modal}
            toggle={setmodal}
            className={className}
            size="lg"
            fade={false}
        >
            <ModalBody>
                <Fragment>
                    {uploadedFileDetail ? (
                        <div className="drag-drop-area flex-x center whitelight fill-height">
                            <img style={{ maxHeight: '500px', objectFit: 'contain' }} className="fill-width" src={uploadedFileDetail.thumb} alt="thumb" />
                        </div>
                    ) : (
                        <Dropzone
                            onDrop={acceptedFiles => acceptedFile(acceptedFiles)}
                            accept="image/*"
                            minSize={0}
                            maxSize={maxSize}
                            multiple={false}
                        >
                            {({
                                getRootProps,
                                getInputProps,
                                isDragReject,
                                rejectedFiles
                            }) => {
                                const isFileTooLarge =
                                    rejectedFiles.length > 0 &&
                                    rejectedFiles[0].size > maxSize;
                                return (
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div className="drag-drop-area flex-x center whitelight">
                                            <div>
                                                <div className="an-16 demi-bold-text accent3--text">
                                                    Drag 'n' drop photo here, or click
                                                    to select Photo
                                                </div>
                                                <div className="an-16 demi-bold-text warning--text text-center pt20">
                                                    {isDragReject &&
                                                        "We reject your file please select only one file or valid file type, sorry!"}
                                                    {isFileTooLarge && (
                                                        <div className="text-danger mt-2">
                                                            File is too large.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }}
                        </Dropzone>
                    )}
                </Fragment>
                <div className="flex-x pt-15 center">
                    <button className="c-btn c-success fs-16 demi-bold-text mr-10" onClick={uploadFileHandler}>Upload</button>
                    <button className="c-btn c-warning fs-16 demi-bold-text" onClick={setmodal}>Cancel</button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default FileUploaderDialog;