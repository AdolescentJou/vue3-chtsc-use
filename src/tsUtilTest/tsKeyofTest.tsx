import React from "react";
import { Button,} from "antd";
interface IProps {}
interface IState {
  key: string;
}
interface Person {
  name: string;
  age: number;
  gender: string;
}
const person: Person = {
  name: "jj",
  age: 23,
  gender: "2020-1-1",
};
//通过输入正确的属性来获取属性名称
class TsTypeTest extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return person[key];
  }
  private onClick() {
    console.log(this.getInfo('name'));
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
export default TsTypeTest;
