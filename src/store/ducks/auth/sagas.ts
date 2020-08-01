import { call } from 'redux-saga/effects';
import { RequestAuth } from '../../../models/enum/request-auth';
import { AuthService } from '../../../services/auth';
import { LocalStorageManager } from '../../../utils/local-storage-manager';

export class AuthSaga extends AuthService {
  constructor(private local: LocalStorageManager) {
    super();
  }
  public * login(auth: any) {
    try {
      const response = yield call(this.api.post, this.base_sign_in, { ...auth.payload });
      console.log(response);
      const authorization = { 'access-token': response.headers["access-token"], client: response.headers.client, uid: response.headers.uid };
      this.local.setItem('client', JSON.stringify(authorization));
    } catch (err) {
      yield console.log(err);
    }
  };
  public * logout() {
    try {
      yield call(this.api.post, this.base_sign_in, RequestAuth);
      yield console.log('success');
    } catch (err) {
      yield console.log(err);
    }
  };

} 
