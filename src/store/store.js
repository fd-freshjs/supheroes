import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';
import { rootSaga, sagaMiddleware } from './sagas';

const { legacy_createStore, applyMiddleware } = require('redux');

export const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
