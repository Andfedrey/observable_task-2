import { createSlice } from '@reduxjs/toolkit';
import { serviceUpdatesAsync } from './asyncSlice';

const initialState = {
  value: {},
  status: '',
};

export const oneServiceSlice = createSlice({
  name: 'oneService',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(serviceUpdatesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(serviceUpdatesAsync.fulfilled, (state, action) => {
        state.status = 'succesed';
        state.value = action.payload;
      })
      .addCase(serviceUpdatesAsync.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default oneServiceSlice.reducer;
