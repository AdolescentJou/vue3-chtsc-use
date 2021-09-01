import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
// import TodoListDemo from "./TodoList/index";
// import TsTest from "./tsUtilTest/tsRecordTest";
import {BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AxiosTest from "./axiosTest/index";
import "antd/dist/antd.css";
function App() {
  return (
    <Provider store={store}>
      {/* <TodoListDemo /> */}
      {/* <TsTest /> */}
      <Router>
      <Switch>
        <Route path="/index" component={AxiosTest} />
	<Redirect path="/*" to="/index"/>
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
