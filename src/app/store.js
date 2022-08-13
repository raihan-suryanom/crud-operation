import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from '../features/post/postSlicer';

export const store = configureStore({
  reducer: { data: dataSlice.reducer },
});
