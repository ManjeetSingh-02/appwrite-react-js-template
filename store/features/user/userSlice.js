import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../../backend';

const getUserAcc = createAsyncThunk('user/getUserAcc', async (_, thunkAPI) => {
  try {
    return await auth.getAccount();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to get user account');
  }
});

const createNewAcc = createAsyncThunk('user/createNewAcc', async ({ email, password, name }, thunkAPI) => {
  try {
    return await auth.createAccount(email, password, name);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to create account');
  }
});

const loginUserAcc = createAsyncThunk('user/loginUserAcc', async ({ email, password }, thunkAPI) => {
  try {
    return await auth.loginUser(email, password);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to login');
  }
});

const updateUserName = createAsyncThunk('user/updateUserName', async (name, thunkAPI) => {
  try {
    return await auth.updateName(name);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to update name');
  }
});

const updateUserEmail = createAsyncThunk('user/updateUserEmail', async ({ email, password }, thunkAPI) => {
  try {
    return await auth.updateEmail(email, password);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to update email');
  }
});

const updateUserPassword = createAsyncThunk('user/updateUserPassword', async ({ newPassword, oldPassword }, thunkAPI) => {
  try {
    return await auth.updatePassword(newPassword, oldPassword);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to update password');
  }
});

const logoutUserAcc = createAsyncThunk('user/logoutUserAcc', async (_, thunkAPI) => {
  try {
    return await auth.logoutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to logout');
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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: false,
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.status = false;
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAcc.pending, (state) => handlePending(state))
      .addCase(getUserAcc.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(getUserAcc.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(createNewAcc.pending, (state) => handlePending(state))
      .addCase(createNewAcc.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(createNewAcc.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(loginUserAcc.pending, (state) => handlePending(state))
      .addCase(loginUserAcc.fulfilled, (state, action) => {
        state.status = true;
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(loginUserAcc.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(updateUserName.pending, (state) => handlePending(state))
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.currentUser.name = action.payload.name;
        state.loading = false;
      })
      .addCase(updateUserName.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(updateUserEmail.pending, (state) => handlePending(state))
      .addCase(updateUserEmail.fulfilled, (state, action) => {
        state.currentUser.email = action.payload.email;
        state.loading = false;
      })
      .addCase(updateUserEmail.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(updateUserPassword.pending, (state) => handlePending(state))
      .addCase(updateUserPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUserPassword.rejected, (state, action) => handleRejected(state, action));

    builder
      .addCase(logoutUserAcc.pending, (state) => handlePending(state))
      .addCase(logoutUserAcc.fulfilled, (state) => {
        state.status = false;
        state.currentUser = null;
        state.loading = false;
      })
      .addCase(logoutUserAcc.rejected, (state, action) => handleRejected(state, action));
  },
});

export { getUserAcc, createNewAcc, loginUserAcc, updateUserName, updateUserEmail, updateUserPassword, logoutUserAcc };
export const userReset = userSlice.actions.resetState;
export default userSlice.reducer;
