import {combineReducers, legacy_createStore as createStore} from 'redux';
import updatesReducer from './updates-reducer';
import chatReducer from './chat-reducer';

const reducers = combineReducers({
    updates: updatesReducer,
    chat: chatReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
