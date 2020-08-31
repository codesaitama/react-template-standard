import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Popover, PopoverBody } from "reactstrap";
import NaturalDragAnimation from "./NaturalDragAnimation";
import classNames from "classnames";
import Member from "components/scrumboard/Member";

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "grey",
    // styles we need to apply on draggables
    ...draggableStyle
});

const CardTask = props => {
    const [taskMenu, setTaskMenu] = useState(false);
    const { task, index, openTaskDialogHandler, deleteTaskHandler } = props;
    let allComments = [];
    let completedSubtask = 0;

    if (task.subtasks && task.subtasks.length) {
        task.subtasks.map(a => {
            allComments = [...allComments, ...a.comments];
            return a;
        });
        completedSubtask = task.subtasks.filter(a => a.completed === true)
            .length;
    }

    return (
        <Draggable
            key={task.id}
            draggableId={task.id}
            index={index}
            type="task"
        >
            {(provided, snapshot) => (
                <NaturalDragAnimation
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                    snapshot={snapshot}
                    {...props}
                >
                    {style => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={style}
                        >
                            <div
                                className="board-task-card"
                                onClick={() => openTaskDialogHandler(task)}
                            >
                                <div className="task-title">
                                    <div title={task.title} className="title">
                                        {task.title}
                                    </div>
                                    <div className="more_icon">
                                        <i
                                            onClick={e => e.stopPropagation()}
                                            className="fas fa-ellipsis-h"
                                            id={`task-${task.id}`}
                                        ></i>
                                        <Popover
                                            trigger="legacy"
                                            className="roy-menu"
                                            innerClassName="roy-inner-content"
                                            placement="bottom-end"
                                            isOpen={taskMenu}
                                            target={`task-${task.id}`}
                                            toggle={() =>
                                                setTaskMenu(!taskMenu)
                                            }
                                        >
                                            <PopoverBody>
                                                <div
                                                    className="roy-menu-list"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setTaskMenu(false);
                                                        openTaskDialogHandler(
                                                            task
                                                        );
                                                    }}
                                                >
                                                    Edit Task
                                                </div>
                                                {/* <div className="roy-menu-list">
                                                    Complete Task
                                                </div> */}
                                                <div
                                                    className="roy-menu-list"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setTaskMenu(false);
                                                        deleteTaskHandler(task);
                                                    }}
                                                >
                                                    Delete Task
                                                </div>
                                            </PopoverBody>
                                        </Popover>
                                    </div>
                                </div>
                                <div className="status-block">
                                    {task.labels &&
                                        task.labels.length &&
                                        task.labels.map((e, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    title={e.name}
                                                    className={classNames(
                                                        "task-status",
                                                        e.color
                                                    )}
                                                ></div>
                                            );
                                        })}
                                </div>
                                {task.cover && task.cover !== "" && (
                                    <div className="task-cover">
                                        <img src={task.cover} alt="cover" />
                                    </div>
                                )}
                                <div className="card-task-member">
                                    {task &&
                                        task.members &&
                                        task.members.map((member, i) => {
                                            return (
                                                <Member
                                                    key={i}
                                                    member={member}
                                                />
                                            );
                                        })}
                                </div>
                                <div className="task-options">
                                    <div
                                        className="icon-space"
                                        onClick={() =>
                                            openTaskDialogHandler(task)
                                        }
                                    >
                                        <i
                                            title="You can watch this task"
                                            className="fas fa-eye"
                                        ></i>
                                    </div>
                                    <div className="icon-space">
                                        <i
                                            title="Comments"
                                            className="far fa-comment-alt"
                                        ></i>
                                    </div>
                                    <div className="count-space">
                                        {allComments.length}
                                    </div>
                                    <div className="icon-space">
                                        <i
                                            title="Attachments"
                                            className="fas fa-paperclip"
                                        ></i>
                                    </div>
                                    <div className="count-space">
                                        {task.attachments.length}
                                    </div>
                                    <div className="icon-space">
                                        <i
                                            title="sub-tasks"
                                            className={classNames(
                                                "fas fa-tasks",
                                                task.subtasks.length &&
                                                    completedSubtask ===
                                                        task.subtasks.length &&
                                                    "success--text"
                                            )}
                                        ></i>
                                    </div>
                                    <div
                                        className={classNames(
                                            "count-space",
                                            task.subtasks.length &&
                                                completedSubtask ===
                                                    task.subtasks.length &&
                                                "success--text"
                                        )}
                                    >{`${completedSubtask}/${task.subtasks.length}`}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </NaturalDragAnimation>
            )}
        </Draggable>
    );
};

export default CardTask;
