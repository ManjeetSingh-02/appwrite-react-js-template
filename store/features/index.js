import userReducer, { getUserAcc, createNewAcc, loginUserAcc, updateUserName, updateUserEmail, updateUserPassword, logoutUserAcc, userReset } from './user/userSlice';
export { userReducer, getUserAcc, createNewAcc, loginUserAcc, updateUserName, updateUserEmail, updateUserPassword, logoutUserAcc, userReset };

import documentReducer, { listDocuments, createDocument, getDocument, updateDocument, deleteDocument, documentReset } from './document/documentSlice';
export { documentReducer, listDocuments, createDocument, getDocument, updateDocument, deleteDocument, documentReset };

import fileReducer, { createFile, deleteFile, getFile, fileReset } from './file/fileSlice';
export { fileReducer, createFile, deleteFile, getFile, fileReset };
