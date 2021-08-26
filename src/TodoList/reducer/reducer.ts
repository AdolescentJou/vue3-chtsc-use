import { actions,ListActionTypes } from "./action";
import { randomString } from "../../utils/randomkey";
export interface task {
  id: string;
  value: string;
  type: string;
}
export interface state {
  taskArray: Array<task>;
}
const initState: state = {
  taskArray: [],
};

const taskReducer = (state: state = initState, action: actions) => {
  switch (action.type) {
    case ListActionTypes.ADD_TASK: {
      const newTask: task = {
        id: randomString(),
        value: action.data,
        type: "add",
      };
      return {
        taskArray: [...state.taskArray, newTask],
      };
    }
    case ListActionTypes.FINISH_TASK: {
      const newTask: task = {
        ...action.data,
        type: "finish",
      };
      return {
        taskArray: [
          ...state.taskArray.filter((item) => item.id !== action.data.id),
          newTask,
        ],
      };
    }
    case ListActionTypes.DELETE_TASK: {
      return {
        taskArray: [
          ...state.taskArray.filter((item) => item.id !== action.data.id),
        ],
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
