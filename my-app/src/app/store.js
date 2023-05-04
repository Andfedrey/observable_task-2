import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import oneServise from '../features/slices/oneServise/oneServiseSlice';
import allServise from '../features/slices/allService/allServiceSlice';
import serveciUpdateEpic from '../features/slices/epic/epic';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(serveciUpdateEpic);

const store = configureStore({
  reducer: {
    oneServise,
    allServise,
  },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
export default store;
