import { createAsyncThunk } from '@reduxjs/toolkit';

export const serviceAllUpdatesAsync = createAsyncThunk(
  'service/update',
  async (inputInSearch, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:7070/api/services');
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
