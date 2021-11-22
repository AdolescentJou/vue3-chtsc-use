import React, { useState } from "react";
import { Button } from "antd";
import { useEffect } from "react";
interface IProps {}
interface IProps2 {
  count: number;
  click: Function;
}
const InnerEffect: React.FC<IProps2> = (props) => {
  //测试Effect和返回函数的执行顺序
  useEffect(() => {
    console.log("字组件useEffect");

    if (props.count === 1) {
      props.click();
    }
  });
  return <div style={{ width: "240px", margin: "15px" }}></div>;
};

const UseEffectTest: React.FC<IProps> = (props) => {
  const [count, setCount] = useState(0);
  //测试Effect和返回函数的执行顺序
  useEffect(() => {
    console.log("执行了父组件Effect" + count);
    return () => {
      console.log("执行了父组件Effect的返回函数");
    };
  }, [count]);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ width: "240px", margin: "15px" }}>
      <InnerEffect count={count} click={onClick} />
      <p>数字{count}</p>
      <Button type="primary" onClick={onClick}>
        加一
      </Button>
    </div>
  );
};

export default UseEffectTest;
