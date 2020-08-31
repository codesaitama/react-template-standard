import styled from "styled-components";

const ReactTableWrapper = styled.div`
  .tbl-loader {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    .lds-ring {
      div {
        width: 8px !important;
        height: 45px !important;
        margin: 0px !important;
        border-color: #563c91 transparent transparent transparent !important;
      }
    }
  }

  .module-header {
    display: flex;
    align-items: center;
    @media (max-width: 575.98px) {
      display: block;
      .react-form-input {
        margin-top: 15px;
        margin-bottom: 5px;
      }
      button {
        margin: 0 !important;
      }
    }
  }
  table {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .1);
  }
  
  tr:nth-child(even) {background: rgba(0,0,0,.03)}
  
  tr:nth-child(odd) {background: rgba(255,255,255)}
  
  .table-container {
      margin: auto 24px;
      padding-bottom: 20px;
  }
  .custom-react-table-theme-class {
    th {
      min-width: 200px; 
    }
    tbody {
      td {
        padding: 10px;
        font-family: "muli-medium";
        color: #757575;
      }
      td.wide-cell{
        width: 150px;
      }
    }
  }

  .Table__itemCount {
    font-size: 14px;
  }

  .Table__pagination {
    display: flex;
    justify-content: flex-end;
    padding: 20px 24px;
  }

  .Table__pageButton {
    font-size: 18px;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #757575 !important;
    margin: 0 5px;
  }

  .Table__pageButton:disabled {
    cursor: not-allowed;
    color: gray;
  }

  .Table__pageButton--active {
    font-weight: bold;
    background: #563c91
    color: white !important;
    width: 30px;
    height: 30px;
    border-radius: 6px;
  }

  .tabl-search {
    padding: 4px;
        margin: 10px;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, .1);
    &:focus {
      outline: 0;
    }
  }

  .back-icon {
    position: absolute;
    right: 30px;
    bottom: 27px;
    color: #563c91;
  }

  .-sort-desc {
    box-shadow: none !important;
    &:before {
      content: "▼";
      float: right;
      margin-right: 14px;
      color: #563c91;
    }
  }

  .-sort-asc {
    box-shadow: none !important;
    &:before {
      content: "▲";
      float: right;
      margin-right: 14px;
      color: #563c91;
    }
  }
  .react-action-class.wide-cell{
    width: 150px;
  }
  .react-action-class {
    button {
      height: auto !important;
      width: auto !important;
    }
  }
  .break-word{
    word-break: break-word;
  }
`;

export default ReactTableWrapper;
