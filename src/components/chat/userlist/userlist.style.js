import styled from "styled-components";

const UserListWrapper = styled.div`
    .active-profile {
        background-color: rgba(0,0,0,.035);
    }
    .user-list-height {
        height: calc(100vh - 344px) !important;
    };
    }
    .user-list-container {
        background: white;
        .user-list-block {
            padding: 16px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            cursor:pointer;
            box-shadow: none;
            transition: all 0.5s;
            &:hover {
                padding-left: 22px;
            }
        }
        .user-name {
            font-size: 14px;
            color: black;
        }
        .count-position {
            top: 6px;
            right: 10px;
            position: relative;
            .message-count {
                box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
                background: #563c91
                color: white;
                height: 25px!important;
                width: 25px!important;
                font-size: 14px!important;
                border-radius: 50%;
                span {
                    position: relative;
                    top: 2px;
                    font-size: 12px;
                }
            }
        }
        .chat-user-profile {
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
    }
`;

export default UserListWrapper;
