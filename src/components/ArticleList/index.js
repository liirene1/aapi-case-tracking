import React from "react";
import { connect } from "react-redux";
import Article from "../Article";

const List = ({ articles }) => {
  return articles.map(article => (
    <div key={article.id} >
      <Article article={article} />
    </div>
  ))
}

const mapStateToProps = state => {
  return { articles: state.articles};
}

const ArticleList = connect(mapStateToProps)(List)
export default ArticleList;
