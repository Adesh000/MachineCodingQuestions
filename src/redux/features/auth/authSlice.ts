import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: false,
    userName: '',
    password: '',
  },
  reducers: {
    onLogin: (state, action) => {
      console.log('Action', action.payload);
      state.authToken = true;
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
    onLogout: state => {
      state.authToken = false;
      state.userName = '';
      state.password = '';
    },
  },
});

export const {onLogin, onLogout} = authSlice.actions;
export default authSlice.reducer;
