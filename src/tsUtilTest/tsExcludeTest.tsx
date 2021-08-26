import React from "react";
import { Button } from "antd";
interface IProps {}
interface IState {}
interface Person {
  name: string;
  age: number;
  gender: string;
}
interface Dog {
  name: string;
  age: number;
}
const person: Person = {
  name: "jj",
  age: 23,
  gender: "2020-1-1",
};
type Difference = Exclude<keyof Person, keyof Dog>;
class TsExcludeTest extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  getInfo(key: Difference) {
    return person[key];
  }
  private onClick() {
    const str = "gender";
    console.log(this.getInfo(str));
  }
  render() {
    return (
      <div style={{ width: "240px", margin: "15px" }}>
        <Button type="primary" onClick={this.onClick}>
          获取字段信息
        </Button>
      </div>
    );
  }
}
export default TsExcludeTest;
