import { call, put } from 'redux-saga/effects';
import { EnterpriseService } from '../../../services/enterprises-list';
import { loadFailure, loadSuccess } from './actions';

export class Sagas extends EnterpriseService {
  public * getListEnterprises() {
    try {
      const response = yield call(this.api.get, this.base_enterprises);
      console.log(response.data);

      yield put(loadSuccess(response.data));
    } catch (err) {
      yield put(loadFailure());
    }
  };
} 