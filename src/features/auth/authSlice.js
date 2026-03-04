import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('access_token');

const initialState = {
  token: token ?? null,
  isAuthenticated: Boolean(token),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = Boolean(action.payload);
      localStorage.setItem('access_token', action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('access_token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
