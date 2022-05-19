import { FC, useState } from "react"
import { connect } from "react-redux"
import { getNews } from "../../../actions/articles"

import { CircularProgress } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import SearchIcon from "@mui/icons-material/Search"
import Button from "../../Button/Button"

import {
  ILayoutPubHeader,
  TCategoryClick,
} from "../../../interfaces/componentInterfaces/layout"

import styles from "../../../styles/components/layout.module.css"

const PublicHead: FC<ILayoutPubHeader> = ({ articles, getNews }) => {
  const [activeButton, setActiveButton] = useState(0)

  const { categories, nextPage } = articles
  if (articles.categories.length === 0) {
    return <CircularProgress />
  }

  // const [activeCategory, setActiveCategory] = useState(-1)

  const onClickHandler: TCategoryClick = (id, categoryName = "") => {
    setActiveButton(id)
    getNews(nextPage, "", categoryName)
  }
  return (
    <nav className={styles.nav}>
      <div className="logo">
        <h3 className={styles.logo}>
          <span className={styles.span}>News</span> Portal
        </h3>
      </div>
      <div className={styles.categoryContainer}>
        {activeButton === 0 ? (
          <Button
            onClick={() => onClickHandler(0)}
            className={styles.categoryActive}>
            All
          </Button>
        ) : (
          <Button onClick={() => onClickHandler(0)}>All</Button>
        )}
        {categories.map(category => {
          const { id, slug, title } = category
          return activeButton === id ? (
            <Button
              key={id}
              onClick={() => onClickHandler(id, slug)}
              className={styles.categoryActive}>
              {title}
            </Button>
          ) : (
            <Button key={id} onClick={() => onClickHandler(id, slug)}>
              {title}
            </Button>
          )
          //   return (<Button key={id} onClick={() => onClickHandler(id, slug)} >
          //     {title}
          // </Button>)
        })}
      </div>
      <div className={styles.svgContainer}>
        {/* // Search Button
        // Login Button */}
        <SearchIcon className={styles.svg} />
        <a href="#">
          <LoginIcon className={styles.svg} />
        </a>
      </div>
    </nav>
  )
}

const mapStateToProps = (state: any) => {
  return {
    articles: state.store.articleReducer,
  }
}

export default connect(mapStateToProps, { getNews })(PublicHead)
