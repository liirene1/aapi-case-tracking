import React from "react";
import RoomIcon from '@material-ui/icons/Room';

import "./index.css";

//TODO: pin svgs - yellow for assaults, red for deaths
const Article = ({ article }) => {
    const { date, headline, location, newsLink, donationLink, violenceType } = article;
    return (
      <div className="article">
        { violenceType === "assault" && <RoomIcon style={{ color:"orange" }}/> }
        { violenceType === "death" && <RoomIcon style={{ color:"red" }}/> }
        <a href={newsLink} className="news-link">
          <h3 className="headline"> { headline } </h3>
        </a>
        <div>
          <p className="date"> {date} </p>
          <p className="location"> {location} </p>
          { donationLink &&
            <a href={donationLink} className="donation-link">
              <p> Donate </p>
            </a>
          }
        </div>
      </div>
    )
}

export default Article;
