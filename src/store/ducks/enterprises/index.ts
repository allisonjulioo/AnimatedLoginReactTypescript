import {Reducer} from 'redux';
import {EnterprisesState} from '../../../models/interfaces/enterprise';
import {EnterpriseTypes} from '../../../models/types/types';

const INITIAL_STATE: EnterprisesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<EnterprisesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EnterpriseTypes.REQUEST:
      return {...state, loading: true};
    case EnterpriseTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case EnterpriseTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
