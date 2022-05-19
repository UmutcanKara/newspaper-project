import React, { FC } from "react"
import { dateCalc } from "../../utils/dateCalculator"

interface ArticleProps {
  imgSrc: string
  title: string
  time: Date
  author: string
}

const Article: FC<ArticleProps> = ({ imgSrc, title, time, author }) => {
  const currentTime = new Date()

  const dateDifference: number = (currentTime.getTime() - time.getTime()) / 1000
  let displayedTimeDifference: string = dateCalc(dateDifference)

  // Date Calculations  START

  // Date Calculations    END

  return (
    <article>
      <div style={{ backgroundImage: `url(${imgSrc})` }} />
      <h4>{title}</h4>
      <div>
        <p> {displayedTimeDifference} </p>
        <p> {author} </p>
      </div>
    </article>
  )
}

export default Article
