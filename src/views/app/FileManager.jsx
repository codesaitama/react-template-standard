import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import GridView from "components/filemanager/gridview/GridView";
import FileManagerWrapper from "components/filemanager/filemanager.style";
import PageTitle from "components/common/PageTitle";
import RoyTooltip from "components/common/RoyTooltip";
import MediaDialog from "components/filemanager/MediaDialog";
import AddFolderDialog from "components/filemanager/AddFolderDialog";
import FolderDialog from "components/filemanager/FolderDialog";
import FileUploaderDialog from "components/filemanager/FileUploaderDialog";
import ListView from "components/filemanager/listview/ListView";
import { foldersData, mediasData } from "components/filemanager/data";
import { initialState, reducer } from "components/filemanager/reducer";

const FileManager = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    viewMode,
    moveToFolderDialog,
    moveToFolderMedia,
    medias,
    folders,
    isViewFolder,
    currentFolder,
    openMediaDialog,
    currentMedia,
    addFolderModal,
    renameFolder,
    uploadDialog,
    uploadedFileDetail
  } = state;

  useEffect(() => {
    dispatch({
      data: {
        medias: mediasData,
        folders: foldersData
      }
    });
  }, []);

  const openFileORFolder = (data, type) => {
    if (type === "folder") {
      dispatch({
        data: {
          isViewFolder: true,
          currentFolder: data
        }
      });
    } else {
      dispatch({
        data: {
          openMediaDialog: true,
          currentMedia: data
        }
      });
    }
  };

  const setRootPath = () => {
    dispatch({
      data: {
        isViewFolder: false,
        currentFolder: null
      }
    });
  };

  const deleteFolder = data => {
    dispatch({
      type: "deleteFolder",
      id: data.id
    });
  };

  const deleteFile = data => {
    dispatch({
      type: "deleteFile",
      id: data.id
    });
  };

  const openFolderDialog = data => {
    dispatch({
      data: {
        moveToFolderDialog: true,
        moveToFolderMedia: data.id
      }
    });
  };

  const moveFiletoRoot = media => {
    dispatch({
      type: "moveMediaToFolder",
      mediaId: media.id,
      folderId: null
    });
  };

  const moveFiletoFolderHandler = folder_id => {
    if (moveToFolderMedia && folder_id) {
      dispatch({
        type: "moveMediaToFolder",
        mediaId: moveToFolderMedia,
        folderId: folder_id
      });
    }
    resetFolderModal();
  };

  const resetFolderModal = () => {
    dispatch({
      type: "resetFolderModal"
    });
  };

  const resetMediaModal = () => {
    dispatch({
      type: "resetMediaModal"
    });
  };

  const resetAddFolderModal = () => {
    dispatch({
      type: "resetAddFolderModal"
    });
  };

  const openAddFolderModal = () => {
    dispatch({
      type: "openAddFolderModal"
    });
  };

  const createFolderHandler = name => {
    if (name !== "") {
      dispatch({
        type: "createFolder",
        name: name
      });
    }
    resetAddFolderModal();
  };

  const openRenameFolderModal = folder => {
    dispatch({
      type: "openRenameFolderModal",
      folder: folder
    });
  };

  const renameFolderHandler = name => {
    if (name !== "") {
      dispatch({
        type: "changeFolderName",
        name: name,
        folderId: renameFolder.id
      });
    }
    resetAddFolderModal();
  };

  const openFileUploader = () => {
    dispatch({
      type: "openFileUploader"
    });
  };

  const removeThumb = () => {
    dispatch({
      data: {
        uploadedThumb: null
      }
    });
  };

  const getThumb = (file, cb) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      cb(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };

  const acceptedFile = file => {
    if (file && file.length) {
      getThumb(file[0], thumb => {
        dispatch({
          data: {
            uploadedFileDetail: { name: file[0].name, thumb },
            uploadedThumb: thumb
          }
        });
      });
    }
  };

  const resetUploadDialog = () => {
    dispatch({
      type: "resetFileUploadDialog"
    });
  };

  const uploadFileHandler = () => {
    if (uploadedFileDetail) {
      dispatch({
        type: "uploadFileAndCreateFile",
        uploadedFileDetail: uploadedFileDetail
      });
    }
  };

  const toggleView = () => {
    dispatch({
      type: "changeView",
      viewMode: viewMode === "gridView" ? "listView" : "gridView"
    });
  };

  return (
    <FileManagerWrapper {...props}>
      <div>
        <PageTitle
          title="sidebar.filemanager"
          className="plr-15"
          breadCrumb={[
            {
              name: "sidebar.app"
            },
            {
              name: "sidebar.filemanager"
            }
          ]}
        />
      </div>
      <div className="file-manager-toolbar flex-x">
        <div className="flex-1">
          <span className="fs-16 demi-bold-text">Storage > root</span>
          {isViewFolder && (
            <span className="fs-16 demi-bold-text">
              {" "}
              > {currentFolder.name}
            </span>
          )}
        </div>

        <div className="ml-10">
          <RoyTooltip
            id="viewMode"
            title={viewMode === "gridView" ? "Grid View" : "List View"}
            placement="bottom"
          >
            <div id="viewMode" className="cursor-pointer" onClick={toggleView}>
              {viewMode === "gridView" ? (
                <i className="fas fa-th-large fs-20"></i>
              ) : (
                <i className="fas fa-stream fs-20"></i>
              )}
            </div>
          </RoyTooltip>
        </div>

        {!isViewFolder && (
          <div className="ml-10">
            <RoyTooltip
              id={`addFolder`}
              title={"Add Folder"}
              placement="bottom"
            >
              <div
                id={`addFolder`}
                className="cursor-pointer"
                onClick={openAddFolderModal}
              >
                <i className="far fa-folder fs-20"></i>
              </div>
            </RoyTooltip>
          </div>
        )}
        <div className="ml-10">
          <RoyTooltip id={`upload`} title={"Upload File"} placement="bottom">
            <div
              id={`upload`}
              className="cursor-pointer"
              onClick={openFileUploader}
            >
              <i className="fas fa-cloud-upload-alt fs-20"></i>
            </div>
          </RoyTooltip>
        </div>
        {isViewFolder && (
          <div className="ml-10">
            <RoyTooltip id={`back`} title={"Back"} placement="bottom">
              <div id={`back`} className="cursor-pointer" onClick={setRootPath}>
                <i className="fas fa-step-backward fs-20"></i>
              </div>
            </RoyTooltip>
          </div>
        )}
      </div>
      <div className="pt-10">
        {viewMode === "gridView" ? (
          <GridView
            medias={medias}
            folders={folders}
            isViewFolder={isViewFolder}
            currentFolder={currentFolder}
            openFileORFolder={openFileORFolder}
            deleteFolder={deleteFolder}
            deleteFile={deleteFile}
            moveToFolder={openFolderDialog}
            moveFiletoRoot={moveFiletoRoot}
            openRenameFolderModal={openRenameFolderModal}
          />
        ) : (
          <ListView
            medias={medias}
            folders={folders}
            isViewFolder={isViewFolder}
            currentFolder={currentFolder}
            openFileORFolder={openFileORFolder}
            deleteFolder={deleteFolder}
            deleteFile={deleteFile}
            moveToFolder={openFolderDialog}
            moveFiletoRoot={moveFiletoRoot}
            openRenameFolderModal={openRenameFolderModal}
          />
        )}
      </div>
      <MediaDialog
        className="media-modal"
        modal={openMediaDialog}
        setmodal={resetMediaModal}
        currentMedia={currentMedia}
      />

      <AddFolderDialog
        modal={addFolderModal}
        setmodal={resetAddFolderModal}
        createFolderHandler={createFolderHandler}
        renameFolder={renameFolder}
        renameFolderHandler={renameFolderHandler}
      />

      <FolderDialog
        className="media-modal"
        modal={moveToFolderDialog}
        setmodal={resetFolderModal}
        folders={folders}
        moveFiletoFolderHandler={moveFiletoFolderHandler}
      />

      <FileUploaderDialog
        className="media-modal"
        modal={uploadDialog}
        setmodal={resetUploadDialog}
        folders={folders}
        moveFiletoFolderHandler={moveFiletoFolderHandler}
        uploadedFileDetail={uploadedFileDetail}
        removeThumb={removeThumb}
        acceptedFile={acceptedFile}
        uploadFileHandler={uploadFileHandler}
      />
    </FileManagerWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state.themeChanger
  };
};

export default connect(mapStateToProps)(FileManager);
