import React, { useState } from "react";
import ArticleList from "../ArticleList";
import MapContainer from "../MapContainer";
import Legend from "../Legend";
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

const Home = () => {
  const [display, setDisplay] = useState("split");
  console.log("display", display);
  return (
    <div className="App">
      <div className="map-container">
        <Legend />
        <MapContainer display={display}/>
      </div>
      <div className="content-container">
        <div className="divider">
          {
            display === "split" ?
            <ArrowRight fontSize="large" onClick={() => this.setDisplay("map")}/>
            :
            <ArrowLeft fontSize="large" onClick={() => this.setDisplay("split")}/>
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
  )
}

export default Home;
