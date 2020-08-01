import { action } from 'typesafe-actions';
import { AuthState } from '../../../models/interfaces/auth';
import { AuthTypes } from '../../../models/types/auth';


export const login = (auth: AuthState) => action(AuthTypes.LOGIN, auth);;

export const logout = () => action(AuthTypes.LOGOUT); 