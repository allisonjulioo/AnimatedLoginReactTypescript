import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AuthState } from '../models/interfaces/auth';
import { EnterprisesState } from '../models/interfaces/enterprise';
import rootReducer from './ducks/rootReducer';
import { RootSaga } from './ducks/rootSaga';

export interface ApplicationState {
  enterprises: EnterprisesState,
  auth: AuthState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(new RootSaga().rootSaga);

export default store;