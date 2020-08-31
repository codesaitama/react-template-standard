import styled from "styled-components";

const FileManagerWrapper = styled.div`
  .grid-media-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 5px;
    @media (max-width: 575.98px) {
      justify-content: center;
    }
  }

  .list-media-container {
    padding: 0 15px;
  }

  .file-block {
    background-color: white;
    padding: 10px;
    margin: 0px 10px 20px 10px;
    cursor: pointer;
    border-radius: 6px;
    position: relative;
    box-shadow: 0 3px 3px -2px rgba(41, 61, 102, 0.2),
      0 3px 4px 0 rgba(41, 61, 102, 0.14), 0 1px 8px 0 rgba(41, 61, 102, 0.12) !important;
    .image-file {
      img {
        width: 136px;
        height: 136px;
        object-fit: cover;
        border-radius: 10px;
        @media (max-width: 575.98px) {
          width: 130px;
          height: 130px;
        }
      }
    }
    .file-overlay {
      display: none;
    }
    &:hover {
      .file-overlay {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: all 0.3s ease-in;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        .options {
          width: 40px;
          height: 40px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-right: 10px;
          i {
            font-size: 18px;
            color: ${props => props.sidebarTheme.activeRouteBackColor};
          }
        }
      }
    }
  }

  .file-manager-toolbar {
    background-color: white;
    margin: 15px 15px;
    padding: 10px;
    color: #6c757d;
    align-items: center;
    box-shadow: 0 0 0 0 rgba(90, 113, 208, 0.11),
      0 4px 16px 0 rgba(167, 175, 183, 0.33);
    border: 1px solid #dde4eb;
    border-radius: 6px;
  }

  .empty-folder {
    img {
      width: 100px;
      height: 100px;
    }
  }

  .list-view-table {
    border-collapse: separate;
    border-spacing: 0 8px;
    th {
      color: ${props => props.layoutTheme.textColor};
    }
    .folder-row {
      background-color: white;
      border-radius: 10px;
      cursor: pointer;
    }
    .folder-name {
      padding: 10px;
      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        margin-right: 10px;
      }
    }
  }
`;

export default FileManagerWrapper;
