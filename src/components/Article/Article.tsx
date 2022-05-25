import React, { FC } from "react"

import { dateCalc } from "../../utils/dateCalculator"
import { minimalize } from "../../utils/stringMinimalize"

import styles from "../../styles/components/article.module.css"

import { ArticleProps } from "../../interfaces/componentInterfaces/articles"

const Article: FC<ArticleProps> = ({ imgSrc, title, time, author }) => {
  const currentTime = new Date()
  const articleTime = new Date(time)

  const dateDifference: number =
    (currentTime.getTime() - articleTime.getTime()) / 1000
  let displayedTimeDifference: string = dateCalc(dateDifference)

  const minimalizedTitle = minimalize(title)

  return (
    <article>
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className={styles.image}
      />
      <h4 className={styles.title}>{`${minimalizedTitle}...`}</h4>
      <div className={styles.miscCont}>
        <p> {displayedTimeDifference} </p>
        <p> {`${author.charAt(0).toUpperCase()}${author.slice(1)}`} </p>
      </div>
    </article>
  )
}

export default Article
