import { applyMiddleware, createStore } from "redux";
import taskReducer, { state as taskState } from "../TodoList/reducer/reducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
export interface storeType {
  taskReducer: taskState;
}

const reducers = combineReducers({
  taskReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
