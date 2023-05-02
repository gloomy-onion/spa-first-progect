import {
  applyMiddleware,
  combineReducers, compose,
  legacy_createStore as createStore,
} from "redux";
import updatesReducer from "./updates-reducer";
import chatReducer from "./chat-reducer";
import teamReducer from "./team-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import viewerReducer from "./viewer-reducer";
import { reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

const reducers = combineReducers({
  updates: updatesReducer,
  chat: chatReducer,
  teamPage: teamReducer,
  auth: authReducer,
  viewer: viewerReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);


window.__store__ = store;

export default store;
