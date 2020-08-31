import React from "react";
import RoyTooltip from "components/common/RoyTooltip";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import { allLabels } from "./boardHelper";
import classNames from "classnames";

const DialogHeaderActions = ({
    taskDescriptionHandler,
    taskDescriptionOpen,
    setTaskModel,
    selectedLabels,
    selectLabelHandler
}) => {
    const ids = selectedLabels.map(a => a.id);
    return (
        <div className="icons">
            <RoyTooltip id="calender" title="Due Date">
                <i id="calender" className="far fa-calendar-alt"></i>
            </RoyTooltip>
            <RoyTooltip id="attachment" title="Add Attachment">
                <i id="attachment" className="fas fa-paperclip"></i>
            </RoyTooltip>
            <RoyTooltip id="Labels" title="Labels">
                <span className="more_icon" id="Labels">
                    <i className="fas fa-tag" id="UncontrolledPopover"></i>
                    <UncontrolledPopover
                        trigger="legacy"
                        className="roy-menu"
                        innerClassName="roy-inner-content"
                        placement="bottom-end"
                        target="UncontrolledPopover"
                    >
                        <PopoverBody style={{ minWidth: "170px" }}>
                            {allLabels &&
                                allLabels.map((label, i) => {
                                    return (
                                        <div
                                            className="roy-menu-list"
                                            key={label.id}
                                            onClick={() =>
                                                selectLabelHandler(label)
                                            }
                                        >
                                            <div className="label-list">
                                                <div
                                                    className={classNames(
                                                        "label-rect",
                                                        label.color,
                                                        "mr-15"
                                                    )}
                                                ></div>
                                                <div>{label.name}</div>
                                                {ids.includes(label.id) && (
                                                    <div>
                                                        <i
                                                            className={classNames(
                                                                "fas fa-check-double",
                                                                "ml-15",
                                                                `${label.color}--text`
                                                            )}
                                                        ></i>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                        </PopoverBody>
                    </UncontrolledPopover>
                </span>
            </RoyTooltip>
            <RoyTooltip id="description" title="Task Description">
                <i
                    id="description"
                    style={
                        taskDescriptionOpen ? { color: "rgb(0, 197, 132)" } : {}
                    }
                    className="fas fa-info"
                    onClick={() => taskDescriptionHandler()}
                ></i>
            </RoyTooltip>
            <RoyTooltip id="close" title="Close">
                <i
                    id="close"
                    className="fas fa-times"
                    onClick={() => setTaskModel()}
                ></i>
            </RoyTooltip>
        </div>
    );
};

export default DialogHeaderActions;
