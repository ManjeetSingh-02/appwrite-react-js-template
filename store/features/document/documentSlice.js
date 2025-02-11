import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../backend';

const listDocuments = createAsyncThunk('document/listDocuments', async ({ type, queries = [] }, thunkAPI) => {
  try {
    return await db.listDocuments(type, queries);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to fetch all documents');
  }
});

const createDocument = createAsyncThunk('document/createDocument', async ({ type, documentID, data = {}, perms = [] }, thunkAPI) => {
  try {
    return await db.createDocument(type, documentID, data, perms);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to create document');
  }
});

const getDocument = createAsyncThunk('document/getDocument', async ({ type, documentID, queries = [] }, thunkAPI) => {
  try {
    return await db.getDocument(type, documentID, queries);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to fetch document');
  }
});

const updateDocument = createAsyncThunk('document/updateDocument', async ({ type, documentID, data = {}, perms = [] }, thunkAPI) => {
  try {
    return await db.updateDocument(type, documentID, data, perms);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to update document');
  }
});

const deleteDocument = createAsyncThunk('document/deleteDocument', async ({ type, documentID }, thunkAPI) => {
  try {
    return await db.deleteDocument(type, documentID);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to delete document');
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

const documentSlice = createSlice({
  name: 'document',
  initialState: {
    documents: [],
    currentDocument: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.documents = [];
      state.currentDocument = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listDocuments.pending, (state) => handlePending(state))
      .addCase(listDocuments.fulfilled, (state, action) => {
        state.documents = action.payload;
        state.loading = false;
      })
      .addCase(listDocuments.rejected, (state, action) => {
        handleRejected(state, action);
        state.documents = [];
      });

    builder
      .addCase(createDocument.pending, (state) => handlePending(state))
      .addCase(createDocument.fulfilled, (state, action) => {
        state.documents.push(action.payload);
        state.loading = false;
      })
      .addCase(createDocument.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(getDocument.pending, (state) => handlePending(state))
      .addCase(getDocument.fulfilled, (state, action) => {
        state.currentDocument = action.payload;
        state.loading = false;
      })
      .addCase(getDocument.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(updateDocument.pending, (state) => handlePending(state))
      .addCase(updateDocument.fulfilled, (state) => {
        const index = state.documents.findIndex((document) => document.id === action.payload.id);
        if (index !== -1) state.documents[index] = action.payload;
        state.loading = false;
      })
      .addCase(updateDocument.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(deleteDocument.pending, (state) => handlePending(state))
      .addCase(deleteDocument.fulfilled, (state) => {
        state.documents = state.documents.filter((document) => document.id !== action.payload);
        if (state.currentDocument && state.currentDocument.id === action.payload) state.currentDocument = null;
        state.loading = false;
      })
      .addCase(deleteDocument.rejected, (state, action) => handleRejected(state, action));
  },
});

export { listDocuments, createDocument, getDocument, updateDocument, deleteDocument };
export const documentReset = documentSlice.actions.resetState;
export default documentSlice.reducer;
