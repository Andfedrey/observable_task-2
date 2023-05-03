import { createAsyncThunk } from '@reduxjs/toolkit';

export const serviceUpdatesAsync = createAsyncThunk(
  'service/update',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:7070/api/services/${id}`);
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
