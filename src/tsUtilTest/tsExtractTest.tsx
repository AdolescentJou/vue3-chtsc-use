import React from "react";
import { Button } from "antd";
interface IProps {}
interface IState {}
interface Person1 {
  name: string;
  age: number;
  gender: string;
}
interface Person2 {
  name: string;
  age: number;
}
class TsExcludeTest extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  private onClick() {
    const person1: Person1 = {
      name: "jjj",
      age: 24,
      gender: "2020-1-1",
    };
    const person2: Person2 = {
      name: "jj",
      age: 23,
    };
    this.isEqual(person1, person2, ["name", "age"]);
  }
  private isEqual<Person1 extends object, Person2 extends object>(
    obj1: Person1,
    obj2: Person2,
    fields: Array<Extract<keyof Person1, keyof Person2>>
  ) {
    fields.map((field) => {
      console.log(obj1[field]);
      console.log(obj2[field]);
      return 1;
    });
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
