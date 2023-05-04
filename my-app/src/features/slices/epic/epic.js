import { ofType } from 'redux-observable';
import {
  catchError, debounceTime, map, switchMap,
} from 'rxjs/operators';
import {
  from, interval, of, timer,
} from 'rxjs';
import { serviceUpdatesAsync } from '../oneServise/asyncSlice';
import { oneServiceSlice } from '../oneServise/oneServiseSlice';

const serveciUpdateEpic = (action$) => action$.pipe(
  ofType(serviceUpdatesAsync.pending.type),
  debounceTime(1000),
  switchMap((o) => from(fetch(`http://localhost:7070/api/services/${o}`)
    .then((res) => res.json()))
    .pipe(
      map((el) => oneServiceSlice.fulfilled(el)),
      catchError((error) => of(oneServiceSlice.rejected(error))),
    )),
);

export default serveciUpdateEpic;
