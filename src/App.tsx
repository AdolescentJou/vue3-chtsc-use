import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
// import TodoListDemo from "./TodoList/index";
import TsTest from "./tsUtilTest/tsRecordTest";
import "antd/dist/antd.css";
function App() {
  return (
    <Provider store={store}>
      {/* <TodoListDemo /> */}
      <TsTest />
    </Provider>
  );
}

export default App;
