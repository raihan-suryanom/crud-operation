import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUniquePosts, sortData } from '../../common/helper';
import { fetchPosts } from './postAPI';

const initialState = {
  latestId: 101,
  data: [],
  unique: [],
  isLoading: true,
};

export const getPosts = createAsyncThunk('data/fetchPosts', async () => {
  const response = await fetchPosts();
  return response;
});

export const dataSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      state.unique = getUniquePosts(state.data);
    },
    updateData: (state, action) => {
      state.data = action.payload;
      state.unique = getUniquePosts(state.data);
    },
    incrementId: (state) => {
      state.latestId = state.latestId + 1;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = sortData(action.payload);
        state.unique = getUniquePosts(action.payload);
      });
  },
});

export const { updateData, addData, incrementId, setLoading } =
  dataSlice.actions;

export default dataSlice.reducer;
