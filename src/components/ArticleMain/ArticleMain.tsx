import React, { FC } from "react"

interface ArticleProps {
  imgSrc: string
  title: string
  desc: string
  time: Date
  author: string
}

const Article: FC<ArticleProps> = ({ imgSrc, title, desc, time, author }) => {
  const currentTime = new Date()
  const timeDate = new Date(time)
  const dateDifference: number =
    (currentTime.getTime() - timeDate.getTime()) / 1000
  let displayedTimeDifference: string = ""

  // Date Calculations  START
  if (dateDifference < 3600) {
    displayedTimeDifference = `${dateDifference / 60} mins ago`
  } else if (3600 < dateDifference && dateDifference < 3600 * 24) {
    displayedTimeDifference = `${dateDifference / 3600} hours ago`
  } else if (3600 * 24 < dateDifference && dateDifference < 3600 * 24 * 7) {
    displayedTimeDifference = `${dateDifference / (3600 * 24)} days ago`
  } else if (
    3600 * 24 * 7 < dateDifference &&
    dateDifference < 3600 * 24 * 30
  ) {
    displayedTimeDifference = `${dateDifference / (3600 * 24 * 7)} weeks ago`
  } else if (
    3600 * 24 * 30 < dateDifference &&
    dateDifference < 3600 * 24 * 365
  ) {
    displayedTimeDifference = `${dateDifference / (3600 * 24 * 30)} months ago`
  } else {
    displayedTimeDifference = `${dateDifference / (3600 * 24 * 365)} years ago`
  }
  // Date Calculations    END

  return (
    <article>
      <div style={{ backgroundImage: `url(${imgSrc})` }}>
        <h4> {title} </h4>
        <div>
          <p> {displayedTimeDifference} </p>
          <p> {author} </p>
        </div>
      </div>
      <div>
        <p> {desc} </p>
        {/* put link and redirect */}
      </div>
    </article>
  )
}

export default Article
