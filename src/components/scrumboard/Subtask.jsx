import React, { useState, useRef } from "react";
import RoyTooltip from "components/common/RoyTooltip";
import TaskComment from "components/scrumboard/TaskComment";
import { commentObject } from "components/scrumboard/boardHelper";
import { randomUUID } from "helper/methods";

const Subtask = ({
    subtask,
    deleteSubtaskHandler,
    changeStatusOfSubtaskHandler,
    addCommentHandler
}) => {
    const [addCommentFlag, setAddCommentFlag] = useState(false);
    const [commentInput, setCommentInput] = useState("");
    const [showComments, setShowComments] = useState(false);
    const textArea = useRef(null);

    const closeAddingComment = () => {
        if (commentInput === "") {
            setAddCommentFlag(!addCommentFlag);
        }
    };

    const addComment = () => {
        if (commentInput !== "") {
            commentObject["comment"] = commentInput;
            commentObject["id"] = randomUUID();
            commentObject["created"] = new Date();
            addCommentHandler({ ...commentObject }, subtask.id);
            setCommentInput("");
            textArea.current.focus();
        }
    };

    return (
        <div className="subtask-detail">
            <div
                style={
                    subtask.completed
                        ? {
                              textDecoration: "line-through",
                              fontStyle: "italic"
                          }
                        : {}
                }
            >
                {subtask.title}
            </div>
            <div className="subtask-options">
                <div
                    className="comment-count"
                    onClick={() => setShowComments(!showComments)}
                >
                    {subtask.comments.length} Comments
                </div>
                <div className="sub-task-ticket">{subtask.ticket}</div>
                <div>
                    <RoyTooltip id="comment" title="Add Comment">
                        <i
                            id="comment"
                            className="far fa-comment-alt"
                            onClick={() => setShowComments(!showComments)}
                        ></i>
                    </RoyTooltip>
                </div>
                <div>
                    <RoyTooltip id="subtaskstatus" title="Mark as Complete">
                        <i
                            style={
                                subtask.completed
                                    ? { color: "#00c584" }
                                    : { color: "#42526e" }
                            }
                            id="subtaskstatus"
                            className="fas fa-check-circle"
                            onClick={() =>
                                changeStatusOfSubtaskHandler(subtask.id)
                            }
                        ></i>
                    </RoyTooltip>
                </div>
                <div>
                    <RoyTooltip id="deletesubtask" title="Delete">
                        <i
                            id="deletesubtask"
                            className="fas fa-trash"
                            onClick={() => deleteSubtaskHandler(subtask.id)}
                        ></i>
                    </RoyTooltip>
                </div>
            </div>
            {showComments && (
                <div className="comment-section">
                    <div>
                        {subtask.comments && subtask.comments.length ? (
                            subtask.comments.map(comment => {
                                return (
                                    <TaskComment
                                        key={comment.id}
                                        comment={comment}
                                    />
                                );
                            })
                        ) : (
                            <div className="no-subtask-info">
                                <div>
                                    <i className="far fa-comment-alt"></i>
                                </div>
                                <div>There are No Comments shared</div>
                            </div>
                        )}
                    </div>
                    <div>
                        {!addCommentFlag ? (
                            <div
                                className="add-comment-block"
                                onClick={() => setAddCommentFlag(true)}
                            >
                                <i className="fas fa-plus"></i>Add a new Comment
                            </div>
                        ) : (
                            <div className="add-comment-input-block">
                                <textarea
                                    ref={textArea}
                                    value={commentInput}
                                    autoFocus
                                    className="add-comment-input"
                                    name="taskTitle"
                                    rows="2"
                                    onChange={e =>
                                        setCommentInput(e.target.value)
                                    }
                                    onBlur={closeAddingComment}
                                    onKeyPress={event => {
                                        if (event.key === "Enter") {
                                            if (!event.shiftKey) {
                                                event.preventDefault();
                                                addComment();
                                            }
                                        }
                                    }}
                                ></textarea>
                                <div className="comment-action">
                                    <button
                                        className="c-btn c-success mr-10"
                                        onClick={addComment}
                                    >
                                        Add Comment
                                    </button>
                                    <button
                                        className="c-btn c-danger"
                                        onClick={() => setAddCommentFlag(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Subtask;
