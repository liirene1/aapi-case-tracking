import React from "react";

//TODO: pin svgs - yellow for assaults, red for deaths
const Article = ({ article }) => {
    const { date, headline, location, newsLink, donationLink, violenceType } = article;
    return (
      <div>
        { violenceType === "assault" && <p> yellow pin </p> }
        { violenceType === "death" && <p> red pin </p> }
        <a href={newsLink}>
          <h3> { headline } </h3>
        </a>
        <p> {date} </p>
        <p> {location} </p>
        { donationLink &&
          <a href={donationLink}> Link to Donation
            <p> Donate: </p>
          </a>
        }

      </div>
    )
}

export default Article;
