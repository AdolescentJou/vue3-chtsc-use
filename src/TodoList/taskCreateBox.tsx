import React from "react";
import { ChangeEvent } from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { addAction, addTaskAction, createAddAction } from "./reducer/action";
interface IProps {
  addTaskAction: (action: addAction) => void;
  createAddAction: (taskValue: string) => addAction;
}
interface IState {
  value: string;
}
class TaskCreateBox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  readonly state: Readonly<IState> = {
    value: "",
  };
  private onChange(event: ChangeEvent<HTMLInputElement>) {
    const str = event.target.value;
    this.setState({ value: str });
  }
  private onClick() {
    this.props.addTaskAction(createAddAction(this.state.value));
  }
  render() {
    return (
      <div style={{ width: "240px", margin: "15px" }}>
        <Input onChange={this.onChange} />
        <Button type="primary" onClick={this.onClick}>
          添加日程
        </Button>
      </div>
    );
  }
}

// const TaskCreateBox: React.FC<IProps> = (props) => {
//   const [value, setValue] = useState<string>("");
//   const onChange: ChangeEventHandler<HTMLInputElement> = (
//     event: ChangeEvent<HTMLInputElement>
//   ) => {
//     const str = event.target.value;
//     setValue(str);
//   };
//   const onClick = () => {
//     props.addTaskAction(createAddAction(value));
//   };
//   return (
//     <div style={{ width: "240px", margin: "15px" }}>
//       <Input onChange={onChange} />
//       <Button type="primary" onClick={onClick}>
//         添加日程
//       </Button>
//     </div>
//   );
// };

export default connect((state) => ({}), {
  addTaskAction,
  createAddAction,
})(TaskCreateBox);
