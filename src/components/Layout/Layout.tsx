import { FC, useEffect } from "react"
import Footer from "./Footer"
import PublicHead from "./PublicHeader"
import PrivateHead from "./PrivateHeader"

import { connect } from "react-redux"
import { getNews, getCategories } from "../../actions/articles"

import { LayoutProps } from "../../interfaces/componentInterfaces/layout"

const Layout: FC<LayoutProps> = ({
  children,
  articleReducer,
  getNews,
  getCategories,
  isLoggedIn = false,
}) => {
  const { articles, categories } = articleReducer

  // if no articles then get articles
  useEffect(() => {
    if (!articles.length) {
      getNews()
    }
    if (!categories.length) {
      getCategories()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
    articleReducer: state.store.articleReducer,
  }
}

export default connect(mapStateToProps, { getNews, getCategories })(Layout)
