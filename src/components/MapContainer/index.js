import React from "react";
import { connect } from "react-redux";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { redDot, yellowDot } from "../../constants";

const MapContainer = ({ articles, display, google }) => {
  const onMarkerClick = (id) => {
    console.log("clicked marker", id);
    //TODO: display articles for clicked location
  }

  const isSplitView = display === "split";
  const mapStyles = {
    width: isSplitView ? '54%' : '85%',
    height: '100%'
  };

  const initialZoomLevel = isSplitView ? 4 : 5;

  return (
    <Map
      google={google}
      zoom={initialZoomLevel}
      style={mapStyles}
      initialCenter={{ lat: 38.5, lng: -98 }}
    >
      {articles.map(article => (
        <Marker
          key={article.id}
          position={{lat: article.lat, lng: article.lng}}
          onClick={() => this.onMarkerClick(article.id)}
          icon= {{
            url: article.violenceType === "assault" ? yellowDot : redDot
          }}
        />
      ))}
    </Map>
  )
}

const mapStateToProps = state => {
  return { articles: state.articles};
}

const ConnectedMapContainer = connect(mapStateToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(ConnectedMapContainer);
