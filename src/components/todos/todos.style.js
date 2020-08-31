import styled from "styled-components";
const TodosWrapper = styled.div`
  .todo-app {
    padding: 0 15px;
    @media (max-width: 575.98px) {
      padding: 0;
    }
  }
  .new-page-title {
    @media (max-width: 575.98px) {
      margin-bottom: 0 !important;
    }
  }
  .todo-container {
    min-height: calc(100vh - 370px);
    max-height: calc(100vh - 255px);
    overflow: auto;
    @media (max-width: 575.98px) {
      min-height: calc(100vh - 310px);
      max-height: calc(100vh - 310px);
    }
  }

  .todo-menu {
    display: none;
    @media (max-width: 750px) {
      display: block;
    }
  }

  .todo-sidebar-container {
    min-height: calc(100vh - 370px);
    max-height: calc(100vh - 176px);
    overflow: auto;
    @media (max-width: 750px) {
      display: none;
    }
  }

  .todo-drawer {
    .todo-sidebar-list {
      width: 100% !important;
    }
    .todo-sidebar-container {
      box-shadow: none !important;
      border: 0 !important;
      min-height: 100% !important;
      max-height: 100% !important;
      overflow: hidden !important;
      @media (max-width: 750px) {
        display: block;
      }
    }
  }

  .todo-drawer-overlay {
    position: absolute;
    z-index: 6;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    opacity: 1;
    transition: opacity 1s;
    width: 100%;
    height: 100%;
  }

  .todo-sidebar-list {
    width: 260px;
    background-color: white;
    .icon {
      i {
        width: 30px;
      }
    }
    .list-name {
      cursor: pointer;
      .list-add-input {
        border: 0;
        background-color: transparent;
        width: 100%;
        &:focus {
          outline: 0;
        }
      }
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }

  .todo-topborder {
    border-top: 1px solid #e5e5e5;
  }

  .todo-board {
    background-color: white;
    @media (max-width: 750px) {
      margin-left: 0 !important;
    }
    @media (max-width: 575.98px) {
      box-shadow: none !important;
      border: 0 !important;
      border-radius: 0;
    }
    .my-todo {
      cursor: pointer;
      border-top: 1px solid #e5e5e5;
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }

  .line_wrap {
    position: relative;
    display: inline-block;
  }
  .line {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    border-top: 1px solid grey;
    -webkit-transition: width 0.5s ease-in;
  }

  .task-add-input {
    border: 0;
    &:focus {
      outline: 0;
    }
  }

  .backlines {
    flex: 1;
    background: linear-gradient(
      180deg,
      white,
      white 52px,
      #e5e5e5 52px,
      #e5e5e5 52px
    );
    background-size: 100% 53px;
    border-top: 1px solid #e5e5e5;
  }

  .label {
    &:before {
      color: #c2c2c2;
      content: "•";
      margin-right: 6px;
    }
  }

  .todo-drawer {
    position: absolute;
    top: 0px;
    bottom: 0;
    right: 0;
    width: 260px;
    display: block;
    z-index: 8;
    background-size: cover;
    overflow: auto;
    background: white;
    background-position: center center;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);

    .main-panel,
    .navbar-fixed,
    .todo-drawer,
    .sidebar-wrapper {
      -webkit-transition-property: top, bottom, width;
      -o-transition-property: top, bottom, width;
      transition-property: top, bottom, width;
      -webkit-transition-duration: 0.1s, 0.1s, 0.2s;
      -o-transition-duration: 0.1s, 0.1s, 0.2s;
      transition-duration: 0.1s, 0.1s, 0.2s;
      -webkit-transition-timing-function: linear, linear, ease;
      -o-transition-timing-function: linear, linear, ease;
      transition-timing-function: linear, linear, ease;
      -webkit-overflow-scrolling: touch;
    }
  }
`;

export default TodosWrapper;
