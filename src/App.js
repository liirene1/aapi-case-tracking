import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import './App.scss';

class App extends Component {
  state = {
    display: "split"
  }

  handleClick = (type) => {
    this.setState({ display: type });
  }

  render() {
    const { display } = this.state;
    return (
      <div className="App">
        { display === "split" && (
          <div className="split-view">
            <div className="map-container">
              MAP
            </div>
            <div className="divider">
              Split divider
              <ArrowRight onClick={() => this.handleClick("map")}/>
            </div>
            <div className="article-container">
              <ArticleList />
            </div>
          </div>
        )}

        { display === "map" && (
          <div className="map-view">
            <div className="map-container">
              MAP
            </div>
            <div className="divider">
              Split divider
              <ArrowLeft onClick={() => this.handleClick("split")}/>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
