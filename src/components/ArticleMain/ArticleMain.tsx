import { FC } from "react"
import { dateCalc } from "../../utils/dateCalculator"

import styles from "../../styles/components/articleMain.module.css"
import { ArticleMainProps } from "../../interfaces/componentInterfaces/articles"

const Article: FC<ArticleMainProps> = ({
  imgSrc,
  title,
  desc,
  time,
  author,
}) => {
  const currentTime = new Date()
  const articleTime = new Date(time)
  const dateDifference: number =
    (currentTime.getTime() - articleTime.getTime()) / 1000

  const displayedTimeDifference = dateCalc(dateDifference)
  console.log(imgSrc)

  return (
    <article className={styles.article}>
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className={styles.image}>
        <h4> {title} </h4>
        <div className={styles.miscContainer}>
          <p> {displayedTimeDifference} </p>
          <p> {`${author.charAt(0).toUpperCase()}${author.slice(1)}`} </p>
        </div>
      </div>
      <div className={styles.desc}>
        <p> {desc} </p>
        {/* put link and redirect */}
      </div>
    </article>
  )
}

export default Article
