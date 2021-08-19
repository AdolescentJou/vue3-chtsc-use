import React from "react";
import { Button, Typography } from "antd";
import { task } from "../reducer/reducer";
import { connect } from "react-redux";
import {
  createFinishAction,
  finishAction,
  finishTaskAction,
} from "../reducer/action";
const { Text } = Typography;
interface IProps {
  task: task;
  finishTaskAction: (action: finishAction) => void;
  createFinishAction: (task: task) => finishAction;
}

const UndoTask: React.FC<IProps> = (props) => {
  const onClick = () => {
    props.finishTaskAction(props.createFinishAction(props.task));
  };
  return (
    <div style={{ width: "240px", margin: "15px" }}>
      <Text type="secondary">{props.task.value}</Text>
      <Button type="primary" onClick={onClick}>
        解决日程
      </Button>
    </div>
  );
};

export default connect((state) => ({}), {
  createFinishAction,
  finishTaskAction,
})(UndoTask);
