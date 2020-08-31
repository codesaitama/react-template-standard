import React, { useMemo, Fragment } from "react";
import MyFile from "components/filemanager/gridview/MyFile";
import orderBy from "lodash/orderBy";

const GridView = props => {
  const {
    medias,
    folders,
    isViewFolder,
    currentFolder,
    openFileORFolder,
    deleteFolder,
    deleteFile,
    moveToFolder,
    moveFiletoRoot,
    openRenameFolderModal
  } = props;

  const rootMedias = useMemo(() => {
    return orderBy(
      medias.filter(a => a.folder_id === null),
      ["created"],
      ["desc"]
    );
  }, [medias]);

  const folderMedias = useMemo(() => {
    if (isViewFolder) {
      return orderBy(
        medias.filter(a => a.folder_id === currentFolder.id),
        ["created"],
        ["desc"]
      );
    }
    return [];
  }, [medias, isViewFolder, currentFolder]);

  const orderedFolders = useMemo(
    () => orderBy(folders, ["created"], ["desc"]),
    [folders]
  );

  return (
    <div className="grid-media-container">
      {isViewFolder ? (
        <Fragment>
          {folderMedias && folderMedias.length ? (
            folderMedias.map(media => {
              return (
                <MyFile
                  type="image"
                  key={media.id}
                  media={media}
                  openFileORFolder={openFileORFolder}
                  deleteFolder={deleteFolder}
                  deleteFile={deleteFile}
                  isViewFolder={isViewFolder}
                  moveToFolder={moveToFolder}
                  moveFiletoRoot={moveFiletoRoot}
                  openRenameFolderModal={openRenameFolderModal}
                />
              );
            })
          ) : (
            <div className="mlr-auto ptb-30">
              <div className="empty-folder">
                <div className="fs-16 demi-bold-text pt-10">Empty Folder</div>
              </div>
            </div>
          )}
        </Fragment>
      ) : (
        <Fragment>
          {orderedFolders &&
            orderedFolders.map(folder => {
              return (
                <MyFile
                  type="folder"
                  key={folder.id}
                  media={folder}
                  openFileORFolder={openFileORFolder}
                  deleteFolder={deleteFolder}
                  deleteFile={deleteFile}
                  isViewFolder={isViewFolder}
                  moveToFolder={moveToFolder}
                  moveFiletoRoot={moveFiletoRoot}
                  openRenameFolderModal={openRenameFolderModal}
                />
              );
            })}
          {rootMedias &&
            rootMedias.map(media => {
              return (
                <MyFile
                  type="image"
                  key={media.id}
                  media={media}
                  openFileORFolder={openFileORFolder}
                  deleteFolder={deleteFolder}
                  deleteFile={deleteFile}
                  isViewFolder={isViewFolder}
                  moveToFolder={moveToFolder}
                  moveFiletoRoot={moveFiletoRoot}
                  openRenameFolderModal={openRenameFolderModal}
                />
              );
            })}
        </Fragment>
      )}
    </div>
  );
};

export default GridView;
