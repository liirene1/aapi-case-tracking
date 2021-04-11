import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateArticle from "./components/Admin/CreateArticle";
import Home from "./components/Home";
import './App.scss';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <CreateArticle />
          </Route>
        </Switch>
      </Router>
    );
}

export default App;
