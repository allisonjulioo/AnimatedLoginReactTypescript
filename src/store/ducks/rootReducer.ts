import { combineReducers } from 'redux';
import auth from './auth';
import enterprises from './enterprises';


export default combineReducers({
  enterprises,
  auth
});