import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
  currentUser: '',
  isAuth: false,
  token: null,
  isLoading: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      console.log('SEND TO SERVER :', email);
      const { data } = await axios.post(`/auth/login`, {
        email,
        password,
      });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      console.log('token', localStorage.getItem('token'));
      return data;
    } catch (e) {
      alert(e);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  function (_, { rejectWithValue, dispatch }) {
    try {
      console.log('Logout...');
      localStorage.removeItem('token');
      dispatch(setLogout());
    } catch (e) {
      alert(e);
    }
  }
);

export const auth = createAsyncThunk(
  'auth/auth',
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.get(`/auth/auth`);
      localStorage.setItem('token', response.data.token);
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.log('removeItem...token');
      console.log(e);
      localStorage.removeItem('token');
    }
  }
);

export const registration = createAsyncThunk(
  'auth/registration',
  async function ({ email, password }, { rejectWithValue }) {
    try {
      console.log('SEND TO SERVER :', email);
      const { data } = await axios.post(`/auth/registration`, {
        email,
        password,
      });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      return data;
      alert('User was created');
    } catch (e) {
      alert(e);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout(state) {
      state.currentUser = {};
      state.isAuth = false;
    },
  },
  extraReducers: {
    [registration.pending]: (state) => {
      state.isLoading = true;
    },
    [registration.fulfilled]: (state, action) => {
      state.currentUser = action.payload.user;
      state.isLoading = false;
      state.isAuth = true;
      state.status = action.payload.message;
      state.token = action.payload.token;
    },
    [registration.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload.user;
      state.isLoading = false;
      state.isAuth = true;
      state.status = action.payload.message;
      state.token = action.payload.token;
    },
    [login.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
  },
});

export const { setUser, setLogout } = userSlice.actions;
