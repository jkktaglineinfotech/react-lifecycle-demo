import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadingReducer } from "./reducers/loadingReducer";

const reducer = combineReducers({
  loading: loadingReducer,
});

const INITIAL_STATE = {
  loading: { isLoading: false, error: null },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
