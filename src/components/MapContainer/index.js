import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { redDot, yellowDot } from "../../constants";
import { GOOGLE_API_KEY } from "../../keys";


class MapContainer extends Component {

  onMarkerClick = (id) => {
    console.log("clicked marker", id);
    //TODO: display articles for clicked location
  }

  render() {
    const { display, articles } = this.props;
    const isSplitView = display === "split";
    const mapStyles = {
      width: isSplitView ? '51%' : '85%',
      height: '100%'
    };

    const initialZoomLevel = isSplitView ? 4 : 5;

    return (
      <Map
        google={this.props.google}
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
}

const mapStateToProps = state => {
  return { articles: state.articles};
}

const ConnectedMapContainer = connect(mapStateToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(ConnectedMapContainer);
