import React from "react";
interface IProps {}
interface IState {}

interface Noraml {
  name: string;
  age: number;
}
interface Special {
  gender: string;
}
//可选属性
type Choice = Partial<Special>;
interface Person extends Noraml,Choice{
	
};
class TsPartialTest extends React.Component<IProps, IState> {
  getInfo(obj: Person) {
    console.log(obj);
  }
  componentDidMount() {
    this.getInfo({
      name: "jj",
      age: 123,
//       gender: "12345",
    });
  }
  render() {
    return <div style={{ width: "240px", margin: "15px" }}> </div>;
  }
}
export default TsPartialTest;
