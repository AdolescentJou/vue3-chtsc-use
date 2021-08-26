import React from "react";
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
//从中取出属性
type Person = Omit<Person1, keyof Person2>;
class TsOmitTest extends React.Component<IProps, IState> {
  getInfo(obj: Person) {
    console.log(obj);
  }
  componentDidMount() {
    this.getInfo({
      gender: "12345",
    });
  }
  render() {
    return <div style={{ width: "240px", margin: "15px" }}> </div>;
  }
}
export default TsOmitTest;
