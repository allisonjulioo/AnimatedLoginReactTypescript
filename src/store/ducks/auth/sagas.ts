import { call, put } from 'redux-saga/effects';
import { User } from '../../../models/classes/user';
import { RequestAuth } from '../../../models/enum/request-auth';
import { AuthService } from '../../../services/auth';
import { login } from './actions';

export class AuthSaga extends AuthService {
  public * login(auth: any) {
    try {
      const response: User = yield call(this.api.post, this.base_sign_in, auth.payload);
      console.log(response);
    } catch (err) {
      yield console.log(err);
    }
  };
  public * logout() {
    try {
      yield call(this.api.post, this.base_sign_in, RequestAuth);
      yield put(login(RequestAuth));
    } catch (err) {
      yield console.log(err);
    }
  };
} 