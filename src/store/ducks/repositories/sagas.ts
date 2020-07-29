import { call, put } from 'redux-saga/effects';
import { Axios } from '../../../services/axios';
import { loadFailure, loadSuccess } from './actions';

export class Sagas extends Axios {
  public * load() {
    try {
      const response = yield call(this.api.get, this.url);
      yield put(loadSuccess(response.data));
    } catch (err) {
      yield put(loadFailure());
    }
  };
} 