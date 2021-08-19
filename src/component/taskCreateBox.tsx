import React, { ChangeEventHandler, useState } from "react";
import { ChangeEvent } from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { addAction, addTaskAction, createAddAction } from "../reducer/action";
interface IProps {
  addTaskAction: (action: addAction) => void;
  createAddAction: (taskValue: string) => addAction;
}

const TaskCreateBox: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const onChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const str = event.target.value;
    setValue(str);
  };
  const onClick = () => {
    props.addTaskAction(createAddAction(value));
  };
  return (
    <div style={{ width: "240px", margin: "15px" }}>
      <Input onChange={onChange} />
      <Button type="primary" onClick={onClick}>
        添加日程
      </Button>
    </div>
  );
};

export default connect((state) => ({}), {
  addTaskAction,
  createAddAction,
})(TaskCreateBox);
