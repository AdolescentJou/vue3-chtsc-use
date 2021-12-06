import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoListDemo from "./TodoList/index";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "antd/dist/antd.css";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/index" component={TodoListDemo} />
          <Redirect path="/*" to="/index" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
