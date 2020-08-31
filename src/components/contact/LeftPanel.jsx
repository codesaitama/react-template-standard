import React from "react";
import { ProfileLockScreen } from "helper/constant";
import classNames from "classnames";

const LeftPanel = ({ activePanel, panel }) => {
    return (
        <div className="left-panel-container roe-box-shadow">
            <div className="flex center left-panel-header">
                <div>
                    <img
                        className="contact-profile-image"
                        src={ProfileLockScreen}
                        alt="profile"
                    />
                </div>
                <div className="fs-16 ml-2">Alice Blue</div>
            </div>

            <div
                className={classNames(
                    "left-panel-list",
                    panel === "all" && "box-glow"
                )}
                onClick={() => activePanel("all")}
            >
                <div className="list-title-logo">AL</div>
                <div className="fs-16 ml-2">All Contacts</div>
            </div>

            <div
                className={classNames(
                    "left-panel-list",
                    panel === "frequently" && "box-glow"
                )}
                onClick={() => activePanel("frequently")}
            >
                <div className="list-title-logo">FR</div>
                <div className="fs-16 ml-2">Frequently Contacted</div>
            </div>

            <div
                className={classNames(
                    "left-panel-list",
                    panel === "favorite" && "box-glow"
                )}
                onClick={() => activePanel("favorite")}
            >
                <div className="list-title-logo">FA</div>
                <div className="fs-16 ml-2">Favorite Contacts</div>
            </div>
        </div>
    );
};

export default LeftPanel;
