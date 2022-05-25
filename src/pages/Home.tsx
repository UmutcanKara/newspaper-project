import { FC } from "react"
import { connect } from "react-redux"
import CircularProgress from "@mui/material/CircularProgress"

import Article from "../components/Article/Article"
import ArticleMain from "../components/ArticleMain/ArticleMain"

import { IHome } from "../interfaces/pageInterfaces/home"

import styles from "../styles/pages/home.module.css"
import Button from "../components/Button/Button"

const Home: FC<IHome> = ({ article }) => {
  const { articles } = article
  const headArticle = articles[0]
  // const headArticle = article[0]

  if (articles.length === 0) {
    return <CircularProgress />
  }
  return (
    <section>
      <h2 className={styles.hotTopic}>Hot Topics</h2>
      <form>
        <input type="text" />
      </form>
      <ArticleMain
        author={headArticle.source_id}
        desc={headArticle.description}
        title={headArticle.title}
        imgSrc={headArticle.image_url}
        time={headArticle.pubDate}
      />
      <h3 className={styles.latest}>Latest News</h3>
      <div className={styles.articles}>
        {articles.map((article, idx) => {
          const { source_id, title, image_url, pubDate } = article
          if (idx === 0) return null
          return (
            <Article
              key={`${title}-${idx}`}
              author={source_id}
              imgSrc={image_url}
              time={pubDate}
              title={title}
            />
          )
        })}
      </div>
      <div className={styles.buttonCont}>
        <Button onClick={() => console.log("Loads!")}>Load More</Button>
      </div>
    </section>
  )
}

const mapStateToProps = (state: any) => {
  return {
    article: state.store.articleReducer,
  }
}

export default connect(mapStateToProps)(Home)
