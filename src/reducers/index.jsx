import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/user/userReducer';
import { fileSlice } from './features/files/fileReducer';

export const store = configureStore({
  reducer: { user: userSlice.reducer, file: fileSlice.reducer },
});
