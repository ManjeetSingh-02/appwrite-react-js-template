import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage } from '../../../app';

const createFile = createAsyncThunk('file/createFile', async ({ type, file, perms = [] }, thunkAPI) => {
  try {
    return await storage.createFile(type, file, perms);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to create file');
  }
});

const getFile = createAsyncThunk('file/getFile', async ({ type, fileID }, thunkAPI) => {
  try {
    return await storage.getFile(type, fileID);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to fetch file');
  }
});

const deleteFile = createAsyncThunk('file/deleteFile', async ({ type, fileID }, thunkAPI) => {
  try {
    return await storage.deleteFile(type, fileID);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to delete file');
  }
});

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const fileSlice = createSlice({
  name: 'file',
  initialState: {
    currentFile: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.currentFile = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFile.pending, (state) => handlePending(state))
      .addCase(createFile.fulfilled, (state) => (state.loading = false))
      .addCase(createFile.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(getFile.pending, (state) => handlePending(state))
      .addCase(getFile.fulfilled, (state, action) => {
        state.currentFile = action.payload;
        state.loading = false;
      })
      .addCase(getFile.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(deleteFile.pending, (state) => handlePending(state))
      .addCase(deleteFile.fulfilled, (state) => (state.loading = false))
      .addCase(deleteFile.rejected, (state, action) => handleRejected(state, action));
  },
});

export { createFile, getFile, deleteFile };
export const fileReset = fileSlice.actions;
export default fileSlice.reducer;
