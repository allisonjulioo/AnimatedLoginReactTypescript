/** eslint-disabled */
import {RequestAuth} from 'models/enum/request-auth';
import {call} from 'redux-saga/effects';
import {AuthService} from 'services/auth';
import {LocalStorageManager} from 'utils/local-storage-manager';

export class AuthSaga extends AuthService {
  constructor(private local: LocalStorageManager) {
    super();
  }
  public *login(auth: any) {
    try {
      // @ts-ignore
      const response = yield call(this.api.post, this.base_sign_in, {
        ...auth.payload,
      });
      const authorization = {
        'access-token': response.headers['access-token'],
        client: response.headers.client,
        uid: response.headers.uid,
      };
      this.local.setItem('client', JSON.stringify(authorization));
    } catch (err) {
      yield alert(err);
    }
  }
  public *logout() {
    try {
      yield call(this.api.post, this.base_sign_in, RequestAuth);
    } catch (err) {
      yield alert(err);
    }
  }
}
