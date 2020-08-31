import React from "react";
import { dateFormat } from "helper/methods";

const TaskComment = ({ comment }) => {
    return (
        <div className="comment-detail">
            <div className="profile">
                <img src={comment.pics} alt="" />
            </div>
            <div className="users">
                <div className="user-name">
                    {comment.first + " " + comment.last}
                    <span className="time">{dateFormat(comment.created)}</span>
                </div>
                <div className="message">{comment.comment}</div>
            </div>
        </div>
    );
};

export default TaskComment;
