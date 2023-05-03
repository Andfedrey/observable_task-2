import { configureStore } from '@reduxjs/toolkit';
import oneServise from '../features/slices/oneServise/oneServiseSlice';
import allServise from '../features/slices/allService/allServiceSlice';

export const store = configureStore({
  reducer: {
    oneServise,
    allServise,
  },
});
