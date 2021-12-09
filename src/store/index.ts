import { createStore, applyMiddleware, Store, Dispatch } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store: Store & {
  dispatch: Dispatch
} = createStore(rootReducer, applyMiddleware(thunk));

export default store;