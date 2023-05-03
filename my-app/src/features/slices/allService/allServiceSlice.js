import { createSlice } from '@reduxjs/toolkit';
import { serviceAllUpdatesAsync } from './asyncSlice';

const initialState = {
  value: [],
  status: '',
};

export const allServiceSlice = createSlice({
  name: 'allService',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(serviceAllUpdatesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(serviceAllUpdatesAsync.fulfilled, (state, action) => {
        state.status = 'succesed';
        state.value = action.payload;
      })
      .addCase(serviceAllUpdatesAsync.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default allServiceSlice.reducer;
