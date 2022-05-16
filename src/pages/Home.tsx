import { FC } from "react"
import { connect } from "react-redux"
import CircularProgress from "@mui/material/CircularProgress"

// import Article from '../components/Article/Article'
import ArticleMain from "../components/ArticleMain/ArticleMain"

interface HomeProps {
  article: {
    articles: any[]
    count: number
  }
}

const Home: FC<HomeProps> = ({ article }) => {
  const { articles, count } = article
  // const headArticle = article[0]

  if (articles.length === 0) {
    return <CircularProgress />
  }
  return (
    <section>
      <h2>Hot Topics</h2>
      {/* <ArticleMain
        author={headArticle.author}
        desc={headArticle.description}
        title={headArticle.title}
        imgSrc={headArticle.urlToImage}
        time={headArticle.publishedAt}
      /> */}
      <h3>Latest News</h3>
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
