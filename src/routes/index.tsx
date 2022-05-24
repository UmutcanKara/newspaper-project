import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import App from "../App";
import Layout from "../components/Layout/Layout"
import Home from "../pages/Home"
import SingleArticle from "../pages/SingleArticle"
import SavedArticles from "../pages/SavedArticles"

const Routing = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<SingleArticle />} />
          <Route path="/saved" element={<SavedArticles />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default Routing
