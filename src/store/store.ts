import { applyMiddleware, createStore } from "redux";
import taskReducer, { state } from "../TodoList/reducer/reducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
export interface storeType {
  taskReducer: state;
}

const reducers = combineReducers({
  taskReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
