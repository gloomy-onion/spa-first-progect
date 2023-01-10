import { combineReducers, legacy_createStore as createStore } from "redux";
import updatesReducer from "./updates-reducer";
import chatReducer from "./chat-reducer";
import teamReducer from "./team-reducer";
import authReducer from './auth-reducer';

const reducers = combineReducers({
  updates: updatesReducer,
  chat: chatReducer,
  teamPage: teamReducer,
  auth: authReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
