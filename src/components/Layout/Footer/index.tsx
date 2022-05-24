import { FC, useEffect } from "react"
import { connect } from "react-redux"

import { getMoreNews } from "../../../actions/articles"
import { isNearPageEnd } from "../../../utils/isNearPageEnd"

import { ILayoutFooter } from "../../../interfaces/componentInterfaces/layout"

import styles from "../../../styles/components/layout.module.css"

const Footer: FC<ILayoutFooter> = ({ getMoreNews }) => {
  const footer = document.getElementsByClassName(styles.footer)[0]
  // useEffect(() => {
  //   if(isNearPageEnd(footer)) {
  //     // getMoreNews()
  //   }

  //   // eslint-disable-next-line
  // }, [window.scrollY])

  return (
    <footer className={styles.footer}>
      <p>Copyright 2021 News Portal</p>
    </footer>
  )
}

const mapStateToProps = (state: any) => {
  return {
    articleRed: state.store.articleReducer,
  }
}

export default connect(mapStateToProps, { getMoreNews })(Footer)
