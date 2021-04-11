import React from "react";
import Link from '@material-ui/core/Link';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { redDot, yellowDot } from "../../constants";
import "./index.css";

const Article = ({ article }) => {
  const { date, headline, location, newsLink, donationLink, violenceType } = article;
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography color="textSecondary" variant="body2">{date}</Typography>
        <Typography>{location} </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          { violenceType === "assault" && <img src={yellowDot} />}
          { violenceType === "death" && <img src={redDot} /> }
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3}>
          <Typography variant="h5"><Link href={newsLink}>{headline} </Link></Typography>
          { donationLink && <Typography><Link href={donationLink}> Donate </Link></Typography>}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default Article;
