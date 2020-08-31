import React, { useState, Fragment } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import { folder } from 'helper/constant';
import { onlyDate } from "helper/methods";

const FileRow = ({ 
    media, 
    type, 
    openFileORFolder, 
    deleteFolder, 
    deleteFile, 
    isViewFolder, 
    moveToFolder, 
    moveFiletoRoot,
    openRenameFolderModal
}) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    return (
        <tr className="folder-row">
            <td className="folder-name fs-15 medium-text" onClick={() => openFileORFolder(media, type)}>
                {
                    type === "folder" ?
                    <Fragment>
                        <img src={folder} alt="file"/>
                        { media.name.length > 16 ? media.name.substring(0, 15)+'...' : media.name }
                    </Fragment> :
                    <Fragment>
                        <img className="border-radius-6" src={media.file} alt="file"/>
                        { media.name.length > 16 ? media.name.substring(0, 15)+'...' : media.name }
                    </Fragment>
                }
            </td>
            <td className="fs-15 medium-text">
                { onlyDate(media.created) }
            </td>
            <td>
            <div className="more-options">
                <i className="fas fa-ellipsis-h fs-16" id={`${type+media.id}`}></i>
            </div>
            <Popover 
                className="roy-menu"
                innerClassName="roy-inner-content"
                placement="bottom-end" 
                target={`${type+media.id}`} 
                trigger="legacy"
                isOpen={popoverOpen}
                toggle={() => setPopoverOpen(!popoverOpen)}
            >
                <PopoverBody onClick={() => setPopoverOpen(!popoverOpen)}>
                    {
                        type === 'folder' ?
                        <div>
                            <div
                                className="roy-menu-list"
                                onClick={() => openRenameFolderModal(media)}
                            >
                                Rename Folder
                            </div>  
                            <div
                                className="roy-menu-list"
                                onClick={() => deleteFolder(media)}
                            >
                                Delete Folder
                            </div>
                        </div> :
                        <div>
                            {
                                isViewFolder ? 
                                <div
                                    className="roy-menu-list"
                                    onClick={() => moveFiletoRoot(media)}
                                >
                                    Move to root
                                </div> :
                                <div
                                    className="roy-menu-list"
                                    onClick={() => moveToFolder(media)}
                                >
                                    Move to Folder
                                </div>
                            }
                            <div
                                className="roy-menu-list"
                                onClick={() => deleteFile(media)}
                            >
                                Delete File
                            </div>
                        </div>
                    }
                    
                </PopoverBody>
            </Popover>
            </td>
        </tr>
    );
};

export default FileRow;