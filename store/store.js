import { configureStore } from '@reduxjs/toolkit';
import { documentReducer, fileReducer, userReducer } from './features';

export default configureStore({
  reducer: {
    document: documentReducer,
    file: fileReducer,
    user: userReducer,
  },
});
