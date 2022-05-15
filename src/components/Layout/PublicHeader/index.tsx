import React, { FC } from "react"

const index: FC = () => {
  return (
    <nav>
      <div className="logo">
        <h3>
          <span>News</span> Portal
        </h3>
      </div>
      <div className="categories">
        {/* Get News From API and get categories */}
      </div>
      <div className="login">{/* login button/ func */}</div>
    </nav>
  )
}

export default index
