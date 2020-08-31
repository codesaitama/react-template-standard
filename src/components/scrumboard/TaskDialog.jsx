import React, { Fragment, useState, useRef, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TaskAttachments from "components/scrumboard/TaskAttachments";
import RoyTooltip from "components/common/RoyTooltip";
import Subtask from "components/scrumboard/Subtask";
import Member from "components/scrumboard/Member";
import classNames from "classnames";
import { subTaskObject, allMembers } from "components/scrumboard/boardHelper";
import { randomUUID, subtaskTicket } from "helper/methods";
import DialogHeaderActions from 'components/scrumboard/DialogHeaderActions'
import AddMember from 'components/scrumboard/AddMember'

const CardTask = props => {
    const [taskDescriptionOpen, setTaskDescriptionOpen] = useState(false);
    const [addSubtaskFlag, setAddSubtaskFlag] = useState(false);
    const [subtaskInput, setSubtaskInput] = useState("");
    const [hideCompletedSubtask, setHideCompletedSubtask] = useState(false);
    const [descriptionEdit, setDescriptionEdit] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    const textArea = useRef(null);
    let subtaskList = null;
    const {
        taskModel,
        setTaskModel,
        taskDetail,
        addNewSubtaskHandler,
        deleteSubtaskHandler,
        changeStatusOfSubtaskHandler,
        addCommentHandler,
        selectLabelHandler,
        selectMemberHandler
    } = props;

    useEffect(() => {
        if(taskDetail) {
            setDescriptionInput(taskDetail.description) 
        }
    }, [taskDetail])

    if (hideCompletedSubtask) {
        subtaskList = taskDetail.subtasks.filter(
            a =>
                !a.completed &&
                a.title.toLowerCase().includes(searchText.toLowerCase())
        );
    } else {
        subtaskList = taskDetail.subtasks.filter(a =>
            a.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    const closeAddingSubtask = () => {
        if (subtaskInput === "") {
            setAddSubtaskFlag(!addSubtaskFlag);
        }
    };

    const addNewSubtask = () => {
        if (subtaskInput !== "") {
            subTaskObject["id"] = randomUUID();
            subTaskObject["ticket"] = subtaskTicket();
            subTaskObject["title"] = subtaskInput;
            subTaskObject["comments"] = [];

            addNewSubtaskHandler({ ...subTaskObject }, taskDetail.id);
            setSubtaskInput("");
            textArea.current.focus();
        }
    };

    const editTaskDescriptionHandler = () => {
        setDescriptionEdit(false)   
    }

    return (
        <Fragment>
            {taskDetail && (
                <Modal
                    isOpen={taskModel}
                    toggle={() => setTaskModel()}
                    size="lg"
                    centered
                    className="task-dialog"
                    contentClassName="task-dialog-content"
                >
                    <ModalHeader toggle={() => setTaskModel()}>
                        <div className="task-dialog-header">
                            <div className="task-title">{taskDetail.title}</div>
                            <DialogHeaderActions
                                taskDescriptionOpen={taskDescriptionOpen}
                                taskDescriptionHandler={() =>  setTaskDescriptionOpen(
                                    !taskDescriptionOpen
                                )}
                                setTaskModel={() => setTaskModel()}
                                selectedLabels={taskDetail.labels}
                                selectLabelHandler={(label) => selectLabelHandler(label, taskDetail.id)}
                            />
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="task-body">
                            <div>
                                {taskDescriptionOpen && (
                                    <div>
                                        {
                                            !descriptionEdit ?
                                                <div className="task-description mb-10" onClick={() => setDescriptionEdit(true)}>
                                                    {descriptionInput!== "" ? descriptionInput : 'Enter Description...'}
                                                </div> : 
                                                <div className="task-description mb-10">
                                                    <textarea 
                                                        value={descriptionInput} 
                                                        autoFocus 
                                                        type="text" 
                                                        className="description-input" 
                                                        onBlur={editTaskDescriptionHandler}
                                                        placeholder="Enter Description..."
                                                        onChange={(e) => setDescriptionInput(e.target.value)}
                                                    />
                                                </div>
                                        }
                                    </div>
                                )}
                                <div className="dialog-flex">
                                    <div className="left-side">
                                        <div className="sub-task">
                                            <div className="subtask-block-header">
                                                <div className="title">
                                                    Sub Tasks ({subtaskList.length})
                                                </div>
                                                <div>
                                                    <input
                                                        value={searchText}
                                                        type="text"
                                                        placeholder="Search sub task..."
                                                        className="subtask-search"
                                                        onChange={e =>
                                                            setSearchText(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <RoyTooltip
                                                        id="hideSubtask"
                                                        title={
                                                            !hideCompletedSubtask
                                                                ? "Hide Completed Sub Task"
                                                                : "Show All Sub Task"
                                                        }
                                                    >
                                                        <i
                                                            style={
                                                                hideCompletedSubtask
                                                                    ? {
                                                                          color:
                                                                              "#00c584"
                                                                      }
                                                                    : {
                                                                          color:
                                                                              "#42526e"
                                                                      }
                                                            }
                                                            id="hideSubtask"
                                                            className="fas fa-eye-slash"
                                                            onClick={() =>
                                                                setHideCompletedSubtask(
                                                                    !hideCompletedSubtask
                                                                )
                                                            }
                                                        ></i>
                                                    </RoyTooltip>
                                                </div>
                                            </div>
                                            <div className="subtask-list">
                                                {taskDetail &&
                                                subtaskList &&
                                                subtaskList.length ? (
                                                    subtaskList.map(
                                                        (subtask, i) => {
                                                            return (
                                                                <Subtask
                                                                    key={
                                                                        subtask.id
                                                                    }
                                                                    subtask={
                                                                        subtask
                                                                    }
                                                                    deleteSubtaskHandler={subtaskId =>
                                                                        deleteSubtaskHandler(
                                                                            subtaskId,
                                                                            taskDetail.id
                                                                        )
                                                                    }
                                                                    changeStatusOfSubtaskHandler={subtaskId =>
                                                                        changeStatusOfSubtaskHandler(
                                                                            subtaskId,
                                                                            taskDetail.id
                                                                        )
                                                                    }
                                                                    addCommentHandler={(
                                                                        commentObj,
                                                                        subtaskId
                                                                    ) =>
                                                                        addCommentHandler(
                                                                            commentObj,
                                                                            subtaskId,
                                                                            taskDetail.id
                                                                        )
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    )
                                                ) : (
                                                    <div className="no-subtask-info">
                                                        <div>
                                                            <i className="fas fa-tasks"></i>
                                                        </div>
                                                        <div>
                                                            There are No
                                                            subtasks attached
                                                        </div>
                                                    </div>
                                                )}
                                                <div>
                                                    {!addSubtaskFlag ? (
                                                        <div
                                                            className="add-subtask-block"
                                                            onClick={() =>
                                                                setAddSubtaskFlag(
                                                                    true
                                                                )
                                                            }
                                                        >
                                                            <i className="fas fa-plus"></i>
                                                            Add a new Subtask
                                                        </div>
                                                    ) : (
                                                        <div className="add-comment-input-block">
                                                            <textarea
                                                                ref={textArea}
                                                                value={
                                                                    subtaskInput
                                                                }
                                                                autoFocus
                                                                className="add-subtask-input"
                                                                name="taskTitle"
                                                                rows="2"
                                                                onChange={e =>
                                                                    setSubtaskInput(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                onBlur={
                                                                    closeAddingSubtask
                                                                }
                                                                onKeyPress={event => {
                                                                    if (
                                                                        event.key ===
                                                                        "Enter"
                                                                    ) {
                                                                        if (
                                                                            !event.shiftKey
                                                                        ) {
                                                                            event.preventDefault();
                                                                            addNewSubtask();
                                                                        }
                                                                    }
                                                                }}
                                                            ></textarea>
                                                            <div className="subtask-action">
                                                                <button
                                                                    className="c-btn c-success mr-10"
                                                                    onClick={
                                                                        addNewSubtask
                                                                    }
                                                                >
                                                                    Add Subtask
                                                                </button>
                                                                <button
                                                                    className="c-btn c-danger"
                                                                    onClick={() =>
                                                                        setAddSubtaskFlag(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <div className="member-block">
                                            {
                                                 taskDetail &&
                                                 taskDetail.members.length ?
                                                <div className="all-member pb-10">
                                                    {
                                                        taskDetail.members.map(
                                                            (member, i) => {
                                                                return (
                                                                    <Member
                                                                        key={i}
                                                                        member={
                                                                            member
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                </div> : <div></div>
                                            }
                                            <div>
                                                <AddMember
                                                    members={allMembers}
                                                    selectedMembers={taskDetail.members}
                                                    selectMemberHandler={(member) => selectMemberHandler(member,  taskDetail.id)}
                                                />
                                            </div>
                                        </div>
                                        {
                                            taskDetail.labels &&
                                            taskDetail.labels.length ?
                                            <div className="label-block">
                                                <div className="heading">
                                                    Labels
                                                </div>
                                                <div className="all-labels">
                                                    {
                                                        taskDetail.labels.map(
                                                            (e, i) => {
                                                                return (
                                                                    <div
                                                                        key={i}
                                                                        title={
                                                                            e.name
                                                                        }
                                                                        className={classNames(
                                                                            "label",
                                                                            "fs-11",
                                                                            "demi-bold-text",
                                                                            e.color
                                                                        )}
                                                                    >
                                                                        {e.name}
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                </div>
                                            </div> : <div></div>    
                                        }
                                        {taskDetail &&
                                        taskDetail.attachments.length ? (
                                            <div className="task-attachment">
                                                <div className="title">
                                                    Attachments (
                                                    {
                                                        taskDetail.attachments
                                                            .length
                                                    }
                                                    )
                                                </div>
                                                <div className="attachment-group">
                                                    {taskDetail.attachments.map(
                                                        (attachment, i) => {
                                                            return (
                                                                <TaskAttachments
                                                                    key={i}
                                                                    attachment={
                                                                        attachment
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            )}
        </Fragment>
    );
};

export default CardTask;
