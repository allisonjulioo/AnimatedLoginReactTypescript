import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../../models/types/auth';
import { EnterpriseTypes } from '../../models/types/types';
import { AuthSaga } from './auth/sagas';
import { Sagas } from './enterprises/sagas';

const sagas: Sagas = new Sagas();
const auth: AuthSaga = new AuthSaga();
export class RootSaga extends Sagas {
  public * rootSaga(type: void) {
    return yield all([
      takeLatest(EnterpriseTypes.REQUEST, () => sagas.getListEnterprises()),
      takeLatest(AuthTypes.LOGIN, (data) => auth.login(data)),
      takeLatest(AuthTypes.LOGOUT, () => auth.logout()),
    ]);
  }


} 