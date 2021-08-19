import { task } from "./reducer";
export enum ListActionTypes {
  "ADD_TASK" = "ADD_TASK",
  "FINISH_TASK" = "FINISH_TASK",
  "DELETE_TASK" = "DELETE_TASK",
}

interface Action<T extends string, P> {
  type: T;
  data: P;
}

export type addAction = Action<ListActionTypes.ADD_TASK, string>;
export type finishAction = Action<ListActionTypes.FINISH_TASK, task>;
export type deleteAction = Action<ListActionTypes.DELETE_TASK, task>;

export type actions = addAction | finishAction | deleteAction

export const createAddAction = (taskValue: string): addAction => {
  return {
    type: ListActionTypes.ADD_TASK,
    data: taskValue,
  };
};

export const createFinishAction = (task: task): finishAction => {
  return {
    type: ListActionTypes.FINISH_TASK,
    data: task,
  };
};
export const createDeleteAction = (task: task): deleteAction => {
  return {
    type: ListActionTypes.DELETE_TASK,
    data: task,
  };
};
export const addTaskAction =
  (action: addAction) => (dispatch: (arg0: addAction) => void) => {
    dispatch(action);
  };

export const finishTaskAction =
  (action: finishAction) => (dispatch: (arg0: finishAction) => void) => {
    dispatch(action);
  };

export const deleteTaskAction =
  (action: deleteAction) => (dispatch: (arg0: deleteAction) => void) => {
    dispatch(action);
  };
