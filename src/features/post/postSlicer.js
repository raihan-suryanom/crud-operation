import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUniquePosts, sortData } from '../../common/helper';
import { fetchPosts } from './postAPI';

const initialState = {
  data: [],
  unique: [],
  isLoading: true,
};

export const incrementAsync = createAsyncThunk('data/fetchPosts', async () => {
  const response = await fetchPosts();
  return response;
});

export const dataSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = sortData(action.payload);
        state.unique = getUniquePosts(action.payload);
      });
  },
});

export default dataSlice.reducer;
