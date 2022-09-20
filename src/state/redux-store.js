import {combineReducers, legacy_createStore as createStore} from 'redux';
import updatesReducer from './updates-reducer';
import chatReducer from './chat-reducer';

let reducers = combineReducers({
    updates: updatesReducer,
    chat: chatReducer
});

const store = createStore(reducers);

export default store;
