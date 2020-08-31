import React, { useState, useRef, useMemo } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { chatDrawerWidth, chatMiniDrawerWidth } from "helper/constant";
import ChattingBoardWrapper from "./chattngboard.style";
import SidebarUserList from "./sidebaruserlist/SidebarUserList";

const ChattngBoard = props => {
  const [mini, setMini] = useState(true);
  const chatScroll = useRef("chatScroll");
  const [messageinput, setMessageinput] = useState("");
  const {
    activeUser,
    userDataList,
    activeUsermethod,
    sidebarTheme,
    userMessages,
    themeSetting
  } = props;

  useMemo(() => {
    if (props.scrolldown) {
      const setScroll = chatScroll.current;
      setScroll.scrollTop(
        setScroll.getScrollHeight() - setScroll.getClientHeight()
      );
    }
  }, [props.scrolldown]);

  const openSideList = () => {
    console.log("false");
    setMini(false);
  };

  const closeSideList = () => {
    setMini(true);
  };

  const sendMessage = () => {
    if (messageinput.trim() !== "") {
      props.sendMessage(messageinput);
      setMessageinput("");
    }
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const onChangeMessageInput = e => {
    setMessageinput(e.target.value);
  };

  return (
    <ChattingBoardWrapper {...props}>
      <div className="board-container roe-box-shadow">
        <div>
          <SidebarUserList
            mini={mini}
            userDataList={userDataList}
            activeUser={activeUser}
            chatDrawerWidth={chatDrawerWidth}
            chatMiniDrawerWidth={chatMiniDrawerWidth}
            closeSideList={() => closeSideList}
            themeSetting={themeSetting}
            sidebarTheme={sidebarTheme}
            activeUsermethod={data => activeUsermethod(data)}
          />
        </div>
        <div className="chat-board-header border-top-radius">
          <ul className="list-inline ma-0 pr-20">
            <li className="list-inline-item vert-middle">
              <i
                className="fas fa-users cursor-pointer mr-10 chat-drawer-user-icon cursor-pointer"
                onClick={openSideList}
              />
            </li>
            <li className="list-inline-item">
              <img
                className="chat-board-user-profile"
                src={activeUser.profile}
                alt="User"
              />
            </li>
            <li className="list-inline-item vert-middle">
              <div className="chat-header-font ml-10">{activeUser.name}</div>
            </li>
            <li className="list-inline-item pull-right vert-middle">
              <i className="chat-header-font fas fa-ellipsis-v icon-color" />
            </li>
          </ul>
        </div>
        <div className="chat-messages-part">
          <Scrollbars className="chat-height" autoHide ref={chatScroll}>
            <div className="plr-10">
              {userMessages &&
                userMessages.map((e, i) => {
                  return e.user_id === activeUser.id && !e.self ? (
                    <div className="mb-15 message-max-width-block" key={i}>
                      <div className="message-design">
                        <img className="user" src={e.profile} alt="user" />
                        <div className="fs-16 demi-bold-text">{e.name}</div>
                        <div className="message-text">{e.message}</div>
                      </div>
                    </div>
                  ) : (
                    e.user_id === activeUser.id && e.self && (
                      <div className="mtb-20 message-max-width-block" key={i}>
                        <div className="self-message-design">
                          <img className="user" src={e.profile} alt="user" />
                          <div className="fs-16 demi-bold-text">{e.name}</div>
                          <div className="message-text">{e.message}</div>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
          </Scrollbars>
        </div>
        <div className="text-area-block">
          <button
            className="send-button c-btn border-bottom-radius"
            onClick={sendMessage}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
          <input
            placeholder="Write Something Here..."
            className="form-control message-text-area border-bottom-radius"
            id="exampleFormControlTextarea1"
            // rows="1"
            value={messageinput}
            onChange={onChangeMessageInput}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </ChattingBoardWrapper>
  );
};

export default ChattngBoard;
