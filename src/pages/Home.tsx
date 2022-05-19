import { FC } from "react"
import { connect } from "react-redux"
import CircularProgress from "@mui/material/CircularProgress"

import Article from "../components/Article/Article"
import ArticleMain from "../components/ArticleMain/ArticleMain"

import { IHome } from "../interfaces/pageInterfaces/home"

const Home: FC<IHome> = ({ article }) => {
  const { articles, count } = article
  const headArticle = articles[0]
  // const headArticle = article[0]

  if (articles.length === 0) {
    return <CircularProgress />
  }
  return (
    <section>
      <h2>Hot Topics</h2>
      <ArticleMain
        author={headArticle.author}
        desc={headArticle.description}
        title={headArticle.title}
        imgSrc={headArticle.urlToImage}
        time={headArticle.pubDate}
      />
      <h3>Latest News</h3>
      {articles.map((article, idx) => {
        const { author, title, urlToImage, pubDate } = article
        if (idx === 0) return null
        return (
          <Article
            key={`${title}-${idx}`}
            author={author}
            imgSrc={urlToImage}
            time={pubDate}
            title={title}
          />
        )
      })}
      {/* {map => <Article />} */}
    </section>
  )
}

const mapStateToProps = (state: any) => {
  return {
    article: state.store.articleReducer,
  }
}

export default connect(mapStateToProps)(Home)
