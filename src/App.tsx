import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoListDemo from "./TodoList/index";
import {BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import TsTest from "./tsUtilTest/tsRecordTest";
// import AxiosTest from "./axiosTest/index";
import DesignHookTest from "./reactTest/designHookTest";
import  UseEffectTest from "./reactTest/useEffectTest"; 
import "antd/dist/antd.css";
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <Route path="/index" component={TodoListDemo} />
        <Route path="/designHookTest" component={DesignHookTest} />
        <Route path="/useEffectTest" component={UseEffectTest} />
	<Redirect path="/*" to="/index"/>
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
