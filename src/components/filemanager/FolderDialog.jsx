import React, { useState, useMemo } from 'react';
import { Modal, ModalBody } from "reactstrap";
import { folder } from 'helper/constant';
import orderBy from "lodash/orderBy";
import { onlyDate } from "helper/methods";


const FolderDialog = props => {
    const [selectFolder, setSelectFolder] = useState(null)
    const { modal, setmodal, className, folders, moveFiletoFolderHandler } = props;

    const orderedFolders = useMemo(
        () => orderBy(folders, ["created"], ["desc"]),
        [folders]
    );

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
                <div className="fs-20 bold-text text-center ptb-10">
                    Select Folder
                </div>
                <table className="fill-width folder-table">
                    <tbody>
                        <tr>
                            <th>folder name</th>
                            <th>Created</th>
                            <th>Selected</th>
                        </tr>
                        {
                            orderedFolders &&
                            orderedFolders.map(data => {
                                return (
                                    <tr className="folder-row" key={data.id} onClick={() => setSelectFolder(data.id)}>
                                        <td className="folder-name fs-15 medium-text">
                                            <img src={folder} alt="folder"/>{data.name}
                                        </td>
                                        <td className="fs-15 medium-text">
                                            { onlyDate(data.created) }
                                        </td>
                                        <td>
                                            {
                                                data.id === selectFolder &&
                                                <i className="fas fa-check-circle success--text ml-20 fs-24"></i>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="text-right">
                    <button className="c-btn c-success" onClick={() => moveFiletoFolderHandler(selectFolder)}>Move to folder</button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default FolderDialog;