import React from "react";
import { ChangeEvent } from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { addUserAction } from "./reducer/action";
import { User } from "./reducer/reducer";
import { randomString } from "../utils/randomkey";
interface IProps {
  addUserAction: (user: User) => void;
}
interface IState {
  name: string;
  age: string;
}
class AddUserBox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  readonly state: Readonly<IState> = {
    name: "",
    age: "",
  };
  private onNameChange(event: ChangeEvent<HTMLInputElement>) {
    const str = event.target.value;
    this.setState({ name: str });
  }
  private onAgeChange(event: ChangeEvent<HTMLInputElement>) {
    const str = event.target.value;
    this.setState({ age: str });
  }
  private onClick() {
    const user: User = {
      name: this.state.name,
      age: this.state.age,
      id: randomString(),
    };
    this.props.addUserAction(user);
  }
  render() {
    return (
      <div style={{ width: "120px", margin: "15px" }}>
        性名：
        <Input onChange={this.onNameChange} />
        年龄:
        <Input onChange={this.onAgeChange} />
        <Button type="primary" onClick={this.onClick}>
          添加
        </Button>
      </div>
    );
  }
}

export default connect((state) => ({}), {
  addUserAction,
})(AddUserBox);
