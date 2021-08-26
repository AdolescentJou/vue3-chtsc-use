import React from "react";
import { Button, Typography } from "antd";
import { task } from "./reducer/reducer";
import { connect } from "react-redux";
import {
  createDeleteAction,
  deleteAction,
  deleteTaskAction,
} from "./reducer/action";
const { Text } = Typography;
interface IProps {
  task: task;
  deleteTaskAction: (action: deleteAction) => void;
  createDeleteAction: (task: task) => deleteAction;
}

const FinishTask: React.FC<IProps> = (props) => {
  const onClick = () => {
    props.deleteTaskAction(props.createDeleteAction(props.task));
  };
  return (
    <div style={{ width: "240px", margin: "15px" }}>
      <Text delete>{props.task.value}</Text>
      <Button type="primary" onClick={onClick}>
        删除日程
      </Button>
    </div>
  );
};

export default connect((state) => ({}), {
  deleteTaskAction,
  createDeleteAction,
})(FinishTask);
