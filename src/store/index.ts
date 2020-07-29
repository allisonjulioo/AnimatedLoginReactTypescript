import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from '../models/types/types';
import rootReducer from './ducks/rootReducer';
import { RootSaga } from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(new RootSaga().rootSaga);

export default store;