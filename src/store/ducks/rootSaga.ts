import { all, takeLatest } from 'redux-saga/effects';
import { RepositoriesTypes } from '../../models/types/types';
import { Sagas } from './repositories/sagas';

const sagas: Sagas = new Sagas();
export class RootSaga extends Sagas {
  /**
  * RootSaga
  */
  constructor() {
    super();
  }
  public * rootSaga() {
    return yield all([
      takeLatest(RepositoriesTypes.LOAD_REQUEST, () => sagas.load()),
    ]);
  }


} 