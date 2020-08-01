import { call, put } from 'redux-saga/effects';
import { EnterpriseService } from '../../../services/enterprises-list';
import { onError, onSuccess } from './actions';

export class Sagas extends EnterpriseService {
  public * getListEnterprises() {
    try {
      const response = yield call(this.api.get, this.base_enterprises);
      yield put(onSuccess(response.data));
    } catch (err) {
      yield put(onError());
    }
  };
} 