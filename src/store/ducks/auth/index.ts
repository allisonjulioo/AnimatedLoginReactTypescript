import {Reducer} from 'redux';
import {AuthState} from '../../../models/interfaces/auth';
import {AuthTypes} from '../../../models/types/auth';

const INITIAL_STATE: AuthState = {
  email: '',
  password: '',
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return {...state, loading: true};
    case AuthTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        error: false,
        data: state,
      };
    default:
      return state;
  }
};

export default reducer;
