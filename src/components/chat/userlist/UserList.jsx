import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import UserListWrapper from "./userlist.style";
import classNames from "classnames";

const UserList = props => {
    const { userDataList, activeUserDetail } = props;
    return (
        <UserListWrapper {...props}>
            <Scrollbars
                autoHide
                className="user-list-height border-bottom-radius"
            >
                <div className="user-list-container">
                    {userDataList &&
                        userDataList.map((user, i) => {
                            return (
                                <div
                                    className={classNames(
                                        "user-list-block",
                                        activeUserDetail.id === user.id &&
                                            "active-profile"
                                    )}
                                    key={i}
                                    onClick={() => props.activeUser(user)}
                                >
                                    <ul
                                        className="list-inline ma-0"
                                    >
                                        <li className="list-inline-item">
                                            <img
                                                className="chat-user-profile"
                                                src={user.profile}
                                                alt="User"
                                            />
                                        </li>
                                        <li className="list-inline-item user-name">
                                            {user.name}
                                        </li>
                                        <li className="list-inline-item pull-right count-position">
                                            <div className="message-count text-center">
                                                <span className="fs-12 demi-bold-text">{user.newMessage}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            );
                        })}
                </div>
            </Scrollbars>
        </UserListWrapper>
    );
};

export default UserList;
