import React from "react";
interface IProps {}
interface IState {}
type Person = Record<string, string>;
class TsRecordTest extends React.Component<IProps, IState> {
  getInfo(obj: Person) {
    console.log(obj);
  }
  componentDidMount() {
    this.getInfo({
      name: "jj",
      gender: "2020-1-1",
    });
  }
  render() {
    return <div style={{ width: "240px", margin: "15px" }}> </div>;
  }
}
export default TsRecordTest;
