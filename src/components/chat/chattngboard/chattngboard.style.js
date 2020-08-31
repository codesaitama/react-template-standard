import styled from "styled-components";

const ChattingBoardWrapper = styled.div`
  .board-container {
    background: white;
    position: relative;
  }

  .chat-drawer-user-icon {
    display: none;
    @media only screen and (max-width: 1199.98px) {
      display: block;
    }
  }

  .chat-board-header {
    background: white;
    color: rgba(0, 0, 0, 0.87) !important;
    padding: 15px 15px 15px;
    .chat-header-font {
      font-size: 20px;
      @media only screen and (max-width: 767.98px) {
        font-size: 18px;
      }
    }
    .chat-board-user-profile {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    .icon-color {
      color: rgba(0, 0, 0, 0.87) !important;
      cursor: pointer;
      position: absolute;
      top: 18px;
    }
  }
  .chat-messages-part {
    background: #fff;
    .chat-height {
      height: calc(100vh - 403px) !important;
      min-height: 232px;
    }
    .chat-messages-part-user-profile {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    .message-design {
      background: rgb(235, 235, 235);
      padding: 15px;
      border-bottom-right-radius: 30px;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 30px;
      margin-top: 15px;
      padding-left: 70px;
      position: relative;
      .user {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        left: 18px;
        top: 20px;
      }
      .message-text {
        font-size: 13px;
      }
    }

    .message-max-width-block {
      max-width: 500px;
      margin: 0 auto;
    }

    .self-message-design {
      background: rgb(235, 235, 235);
      padding: 15px 20px;
      border-bottom-left-radius: 30px;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      margin-top: 15px;
      padding-right: 60px;
      position: relative;
      .user {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        right: 22px;
        top: 20px;
      }
      .message-text {
        font-size: 13px;
      }
    }
  }
  .text-area-block {
    position: relative;
    .send-button {
      position: absolute !important;
      right: 0px;
      width: 42px;
      height: 42px;
      background: rgba(0, 0, 0, 0.035);
      color: rgba(0, 0, 0, 0.87);
    }
    .message-text-area {
      font-size: 14px !important;
      border: 1px solid #ddd !important;
      resize: none;
      width: 100%;
      padding: 20px 32px 20px 10px;
      margin: 0 auto;
      &:focus {
        // border: 1px solid #9a9a9a !important;
        box-shadow: none !important;
      }
    }
  }
`;

export default ChattingBoardWrapper;
