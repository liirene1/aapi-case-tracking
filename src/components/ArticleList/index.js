import React from "react";
import { connect } from "react-redux";
import Timeline from '@material-ui/lab/Timeline';
import Article from "../Article";

const List = ({ articles }) => (
  <div>
    <Timeline align="alternate">
      { articles.map(article => <Article article={article} key={article.id}/>)}
    </Timeline>
  </div>
)

const mapStateToProps = state => {
  return { articles: state.articles};
}

const ArticleList = connect(mapStateToProps)(List)
export default ArticleList;
