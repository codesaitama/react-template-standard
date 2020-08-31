import { randomUUID } from "helper/methods";

export const initialState = {
    viewMode: 'gridView',
    moveToFolderDialog: false, // When move media to folder
    moveToFolderMedia: null, // media detail while moving to folder
    medias: [], // Medias list
    folders: [], // Folders list
    isViewFolder: false, // view folders detail
    currentFolder: null, // current folder detail
    openMediaDialog: false, // view media dialog
    currentMedia: false, // current media detail,
    addFolderModal: false, // Add Folder Modal
    renameFolder: null, // Rename Folder detail
    uploadDialog: false, // Upload dialog flag
    uploadedFileDetail: null, // Uploaded file detail
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'changeView':
            return {
                ...state,
                viewMode: action.viewMode
            };
        case 'deleteFile':
            return {
                ...state,
                medias: state.medias.filter(a => a.id !== action.id)
            };
        case 'deleteFolder':
            return {
                ...state,
                folders: state.folders.filter(a => a.id !== action.id)
            };
        case 'resetMediaModal':
            return {
                ...state,
                openMediaDialog: false,
                currentMedia: null
            };
        case 'resetFolderModal':
            return {
                ...state,
                moveToFolderDialog: false,
                moveToFolderMedia: null
            };
        case 'resetAddFolderModal':
            return {
                ...state,
                addFolderModal: false,
                renameFolder: null
            };
        case 'openAddFolderModal':
            return {
                ...state,
                addFolderModal: true,
            };
        case 'openRenameFolderModal':
            return {
                ...state,
                addFolderModal: true,
                renameFolder: action.folder
            };
        case 'changeFolderName':
            return {
                ...state,
                folders: state.folders.map(folder => {
                    if (folder.id === action.folderId) {
                        return {...folder, name: action.name };
                    } else {
                        return folder;
                    }
                })
            }
        case 'moveMediaToFolder':
            return {
                ...state,
                medias: state.medias.map(media => {
                    if (media.id === action.mediaId) {
                        return {...media, folder_id: action.folderId };
                    } else {
                        return media;
                    }
                })
            }
        case 'createFolder':
            return {
                ...state,
                folders: [...state.folders, {
                    id: randomUUID(),
                    name: action.name,
                    created: new Date()
                }],
            };
        case 'openFileUploader':
            return {
                ...state,
                uploadDialog: true,
                uploadedFileDetail: null
            };
        case 'resetFileUploadDialog':
            return {
                ...state,
                uploadDialog: false,
                uploadedFileDetail: null
            };
        case 'uploadFileAndCreateFile':
            return {
                ...state,
                medias: [...state.medias, {
                    id: randomUUID(),
                    file: action.uploadedFileDetail.thumb,
                    name: action.uploadedFileDetail.name,
                    folder_id: state.currentFolder ? state.currentFolder.id : null,
                    created: new Date()
                }],
                uploadDialog: false,
            };
        default:
            return {
                ...state,
                ...action.data
            };
    }
};