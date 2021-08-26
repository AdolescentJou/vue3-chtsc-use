import React from "react";
import { task } from "./reducer/reducer";
import { connect } from "react-redux";
import UndoTask from "./undoTask";
import FinishTask from "./finishTask";
import { storeType } from "../store/store";
interface IProps {
  taskList: Array<task>;
}

const TaskList: React.FC<IProps> = (props) => {
  return (
    <>
      {props.taskList.map((item) => {
        if (item.type === "add") {
          return <UndoTask key={item.id} task={item} />;
        } else {
          return <FinishTask key={item.id} task={item} />;
        }
      })}
    </>
  );
};

export default connect(
  (store: storeType) => ({
    taskList: store.taskReducer.taskArray,
  }),
  {}
)(TaskList);
