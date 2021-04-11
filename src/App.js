import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ArticleList from "./components/ArticleList";
import MapContainer from "./components/MapContainer";
import CreateArticle from "./components/Admin/CreateArticle";
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
// import { redDot, yellowDot } from "./constants";
import './App.scss';

export const redDot = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
export const yellowDot = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";


const Legend = () => (
  <div className="legend">
  <h4> LEGEND </h4>
  <div>
    <img src={redDot} />
    <span> Death </span>
  </div>

  <div>
    <img src={yellowDot} />
    <span> Physical Assault </span>
  </div>
  </div>
);

class App extends Component {
  state = {
    display: "split"
  }

  handleClick = (type) => {
    console.log("clicked");
    this.setState({ display: type });
  }

  render() {
    const { display } = this.state;
    console.log(display)
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <div className="map-container">
                <Legend />
                <MapContainer display={display}/>
              </div>
              <div className="content-container">
                <div className="divider" onClick={() => this.handleClick("map")}>
                  {
                    display === "split" ?
                    <ArrowRight fontSize="large" onClick={() => this.handleClick("map")}/>
                    :
                    <ArrowLeft fontSize="large" onClick={() => this.handleClick("split")}/>
                  }
                </div>
                {
                  display === "split" &&
                  <div className="article-container">
                    <ArticleList />
                  </div>
                }
              </div>
            </div>
          </Route>
          <Route path="/admin">
            <CreateArticle />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
