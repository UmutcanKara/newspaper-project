import { FC, ReactNode, useEffect } from "react"
import Footer from "./Footer"
import PublicHead from "./PublicHeader"
import PrivateHead from "./PrivateHeader"

import { connect } from "react-redux"
import { getNews, getMoreNews } from "../../actions/articles"

interface LayoutProps {
  children: ReactNode
  isLoggedIn?: boolean
  articles: any
  getNews: () => void
  getMoreNews: (num: number) => void
}

const Layout: FC<LayoutProps> = ({
  children,
  articles,
  getNews,
  getMoreNews,
  isLoggedIn = false,
}) => {
  console.log(articles)

  useEffect(() => {
    if (articles.articles.length === 0) {
      getNews()
    }
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {isLoggedIn ? <PrivateHead /> : <PublicHead />}
      {children}
      <Footer />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    articles: state.root.articleReducer,
  }
}

export default connect(mapStateToProps, { getNews, getMoreNews })(Layout)
