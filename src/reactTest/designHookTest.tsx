import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
interface IProps {}

//自定义hook监听鼠标位置
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("加载监听鼠标Hook");
    const updateMouse = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);
    return () => {
      console.log("销毁监听鼠标Hook");

      document.removeEventListener("mousemove", updateMouse);
    };
  });
  return position;
};

//自定义hook实现防抖
const useDebounce = (func: () => void) => {
  let timeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      func();
    }, 3000);
  });

  const cancel = clearTimeout(Number(timeout));
  return [cancel];
};

//测试hook
const useTestHook = () => {
  useEffect(() => {
    console.log("加载测试Hook");
    return () => {
      console.log("测试Hook销毁");
    };
  });
};

const DesignHookTest: React.FC<IProps> = (props) => {
  //如果组件在更新就不执行防抖函数，过时间不更新在执行
  //   const [a, setA] = useState(0);
  //   const [b, setB] = useState(0);
  //   useDebounce(() => {
  //     setB(a);
  //   });

  //   const changeIpt = (e: any) => {
  //     setA(e.target.value);
  //   };
  //   return (
  //     <div>
  //       <input type="text" onChange={changeIpt} />
  //       {b} {a}
  //     </div>
  //   );
  useEffect(() => {
    console.log("组件加载");

    return () => {
      console.log("组件销毁");
    };
  });
  const position = useMousePosition();
  useTestHook();
  return (
    <div>
      <div>x: {position.x}</div>
      <div>y: {position.y}</div>
    </div>
  );
};

export default DesignHookTest;
