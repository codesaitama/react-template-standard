import styled from "styled-components";

const ContactWrapper = styled.div`
  .contact-container {
    .box-glow {
      background: rgba(0, 0, 0, 0.035);
      color: rgba(0, 0, 0, 0.87);
    }
    .left-panel-list {
      cursor: pointer;
      padding: 5px 15px;
      display: flex;
      align-items: center;
      font-size: 15px;
      &:focus {
        color: #16181b;
        background-color: transparent;
        outline: 0;
      }
      &:active {
        color: #16181b;
        outline: 0;
      }
      .list-title-logo {
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .left-panel-container {
      background: white;
      height: 100%;
      .left-panel-header {
        padding: 10px 15px;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
    .contact-profile-image {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .contact-profile-no-image {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: ${props => props.sidebarTheme.activeRouteBackColor};
      color: ${props => props.sidebarTheme.activeRouteTextColor};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right-panel {
      background: white;
      .contact-list-header {
        padding: 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .add-contact {
          font-size: 24px;
          color: #563c91;
          cursor: pointer;
        }
        .contact-action-dropdown {
          .dropdown-toggle {
            font-weight: 300;
            background-color: rgba(0, 0, 0, 0.035);
            color: rgba(0, 0, 0, 0.87);
            border: 0;
          }
        }
      }
      .more-vert-icon {
        cursor: pointer;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.4);
      }
      .no-found-message {
        font-size: 16px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
        padding: 15px 0;
      }
      .contact-table {
        overflow-x: auto;
        .contact-fav-icon {
          cursor: pointer;
          font-size: 16px;
          color: #e91e63;
        }
        td {
          vertical-align: middle;
        }
      }
    }
    .contact-selection input:checked ~ .state.p-primary label:after,
    .pretty.p-toggle .state.p-primary label:after {
      background-color: #563c91 !important;
    }

    .search-contant {
      background-color: transparent;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: 0;
      outline: 0;
      cursor: pointer;
      i {
        color: #6c757d;
        font-size: 18px;
      }
    }
  }
`;

export default ContactWrapper;
