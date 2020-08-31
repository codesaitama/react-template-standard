import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";
import { folder } from "helper/constant";

const MyFile = ({
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
    <div className="file-block">
      <div className="image-file">
        {type === "folder" ? (
          <img src={folder} alt="file" />
        ) : (
          <img src={media.file} alt="file" />
        )}
      </div>
      <div className="fs-13 demi-bold-text ptb-5 file-name">
        {media.name.length > 16
          ? media.name.substring(0, 15) + "..."
          : media.name}
      </div>
      <div className="file-overlay">
        <div className="flex-x">
          <div
            className="open-media options"
            onClick={() => openFileORFolder(media, type)}
          >
            <i className="far fa-eye"></i>
          </div>
          <div className="More options" id={`${type + media.id}`}>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <Popover
            className="roy-menu"
            innerClassName="roy-inner-content"
            placement="bottom-end"
            target={`${type + media.id}`}
            trigger="legacy"
            isOpen={popoverOpen}
            toggle={() => setPopoverOpen(!popoverOpen)}
          >
            <PopoverBody onClick={() => setPopoverOpen(!popoverOpen)}>
              {type === "folder" ? (
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
                </div>
              ) : (
                <div>
                  {isViewFolder ? (
                    <div
                      className="roy-menu-list"
                      onClick={() => moveFiletoRoot(media)}
                    >
                      Move to root
                    </div>
                  ) : (
                    <div
                      className="roy-menu-list"
                      onClick={() => moveToFolder(media)}
                    >
                      Move to Folder
                    </div>
                  )}
                  <div
                    className="roy-menu-list"
                    onClick={() => deleteFile(media)}
                  >
                    Delete File
                  </div>
                </div>
              )}
            </PopoverBody>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default MyFile;
