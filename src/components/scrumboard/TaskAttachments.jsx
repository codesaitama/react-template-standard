import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";

const CardTask = ({ attachment }) => {
    const [attachmentMenu, setAttachmentMenu] = useState(false);
    return (
        <div className="attachment">
            <div className="more_icon">
                <i
                    className="fas fa-ellipsis-h taskboardicons--text"
                    id={`attachment-${attachment.id}`}
                ></i>
                <Popover
                    trigger="hover"
                    className="roy-menu"
                    innerClassName="roy-inner-content"
                    placement="bottom-end"
                    isOpen={attachmentMenu}
                    target={`attachment-${attachment.id}`}
                    toggle={() => setAttachmentMenu(!attachmentMenu)}
                >
                    <PopoverBody>
                        <div className="roy-menu-list">Download</div>
                        <div className="roy-menu-list">Copy Link</div>
                        <div className="roy-menu-list">Delete</div>
                    </PopoverBody>
                </Popover>
            </div>
            <div>
                <img src={attachment.pics} alt="attachment" />
            </div>
            <div className="file-name">{attachment.name}</div>
        </div>
    );
};
export default CardTask;
