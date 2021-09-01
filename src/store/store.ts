import { applyMiddleware, createStore } from "redux";
import taskReducer, { state as taskState } from "../TodoList/reducer/reducer";
import userReducer, { state as userState} from "../axiosTest/reducer/reducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
export interface storeType {
  taskReducer: taskState;
  userReducer: userState;
}

const reducers = combineReducers({
  taskReducer,
  userReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
