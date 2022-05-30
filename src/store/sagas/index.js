import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { heroesSaga } from './heroes.saga';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield all([heroesSaga()]);
}
