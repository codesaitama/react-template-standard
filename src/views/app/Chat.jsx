import React, { useState } from "react";
import { connect } from "react-redux";
import { userDataList, userMessages } from "util/data/chatData";
import { ProfileLockScreen } from "helper/constant";
import UserList from "components/chat/userlist/UserList";
import ChattngBoard from "components/chat/chattngboard/ChattngBoard";
import PageTitle from "components/common/PageTitle";

const Chat = ({ sidebarTheme, themeSetting }) => {
  const [stateUserDataList] = useState(userDataList);
  const [activeUser, setActiveUser] = useState(userDataList[0]);
  const [stateUserMessages, setUserMessages] = useState(userMessages);
  const [scrolldown, setScrolldown] = useState(false);

  const sendMessage = async data => {
    setScrolldown(false);
    const obj = {
      self: true,
      user_id: activeUser.id,
      name: "Alice Blue",
      profile: ProfileLockScreen,
      message: data
    };
    const userMessages = stateUserMessages;
    userMessages.push(obj);
    await setUserMessages(userMessages);
    await setScrolldown(true);
  };

  const userListheader = {
    padding: "15px",
    textAlign: "center",
    fontWeight: "600",
    background: "#fff",
    borderBottom: "1px solid rgba(0,0,0,0.1)"
  };

  return (
    <div className="chat-container">
      <PageTitle
        title="sidebar.chat"
        className="plr-15"
        breadCrumb={[
          {
            name: "sidebar.app"
          },
          {
            name: "sidebar.chat"
          }
        ]}
      />
      <div className="mt-15 flex plr-15 mobile-spacing-class">
        <div className="pr-10 chatUserDisplayHideOnLg">
          <div className="roe-box-shadow">
            <div style={userListheader} className="border-top-radius">
              USERS
            </div>
            <UserList
              userDataList={stateUserDataList}
              themeSetting={themeSetting}
              sidebarTheme={sidebarTheme}
              activeUserDetail={activeUser}
              activeUser={data => setActiveUser(data)}
            />
          </div>
        </div>
        <div className="flex-1">
          <ChattngBoard
            userDataList={stateUserDataList}
            sidebarTheme={sidebarTheme}
            themeSetting={themeSetting}
            activeUser={activeUser}
            activeUsermethod={data => setActiveUser(data)}
            sendMessage={data => sendMessage(data)}
            userMessages={stateUserMessages}
            scrolldown={scrolldown}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    themeSetting: {
      toolbarDisplayValue: state.themeSetting.toolbarDisplayValue,
      footerDisplayValue: state.themeSetting.footerDisplayValue
    }
  };
};

export default connect(
  mapStateToProps,
  null
)(Chat);
