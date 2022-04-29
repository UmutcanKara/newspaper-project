import { FC, useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import Article from "../components/Article/Article";
import ArticleMain from '../components/ArticleMain/ArticleMain';

interface HomeProps {
  articles: any[]
}

const Home:FC<HomeProps> = ({ articles }) => {
  const headArticle = articles[0]

  if (articles.length === 0) {
    return <CircularProgress />
  }
  return <section>
      <h2>Hot Topics</h2>
      <ArticleMain author={headArticle.author} desc={headArticle.description} title={headArticle.title} imgSrc={headArticle.urlToImage} time={headArticle.publishedAt} />
      <h3>Latest News</h3>
      {/* {map => <Article />} */}
  </section>;
};

const mapStateToProps = (state: any) => {
  return {
      articles: state.root.articleReducer.articles,
  }
}

export default connect(mapStateToProps)(Home);
