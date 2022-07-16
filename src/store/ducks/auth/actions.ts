import {AuthState} from 'models/interfaces/auth';
import {AuthTypes} from 'models/types/auth';
import {action} from 'typesafe-actions';

export const login = (auth: AuthState) => action(AuthTypes.LOGIN, auth);

export const logout = () => action(AuthTypes.LOGOUT);
