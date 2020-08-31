import React from "react";
import SidebarUserListWrapper from "./sidebaruserlist.style";
import UserList from "components/chat/userlist/UserList";

const Sidebar = props => {
    const {
        mini,
        chatDrawerWidth,
        closeSideList,
        chatMiniDrawerWidth,
        userDataList,
        activeUser,
        activeUsermethod,
        sidebarTheme,
        themeSetting
    } = props;

    const sidebar = {
        width: mini ? chatMiniDrawerWidth : chatDrawerWidth
    };

    return (
        <SidebarUserListWrapper mini={mini}>
            <div
                id="chat-user-sidebar"
                style={sidebar}
                className="chat-user-sidebar sideBack"
            >
                <div
                    className="chat-close-drawer-icon cursor-pointer"
                    onClick={closeSideList()}
                >
                    <i className="fas fa-times-circle" />
                </div>
                <div className="chat-user-sidebar-wrapper">
                    <div className="chat-sidebar-header">USERS</div>
                    <UserList
                        userDataList={userDataList}
                        sidebarTheme={sidebarTheme}
                        activeUserDetail={activeUser}
                        themeSetting={themeSetting}
                        activeUser={data => activeUsermethod(data)}
                    />
                </div>
            </div>
        </SidebarUserListWrapper>
    );
};

export default Sidebar;
