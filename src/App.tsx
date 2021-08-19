import React from "react";
import TaskCreateBox from "./component/taskCreateBox";
import { Provider } from "react-redux";
import store from "./store/store";
import TaskList from "./component/taskList";
import 'antd/dist/antd.css'
function App() {
  return (
    <Provider store={store}>
      <TaskCreateBox />
      <TaskList/>
    </Provider>
  );
}

export default App;
