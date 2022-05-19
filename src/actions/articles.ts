import axios from "axios"
import { GET_NEWS, GET_CATEGORIES } from "./types"
import { API_ENDPOINT } from "../secrets"
import { formatDate } from "../utils/formatDate"

import { getNewsType } from "../interfaces/actionInterfaces/article"

export const getNews: getNewsType =
  (page = 1, q = "", category = "") =>
  async (dispatch: any) => {
    const dateNow = formatDate(new Date())
    let requestURL = `${API_ENDPOINT}/news/articles/?to_date=${dateNow}&from_date=2021-04-16&page=${page}`
    if (q) requestURL += `&q=${q}`
    if (category) requestURL += `&category=${category}`

    const res = await axios.get(requestURL)
    const { results, nextPage } = res.data
    dispatch({
      type: GET_NEWS,
      payload: { results, nextPage },
    })
  }

export const getCategories = () => (dispatch: any) => {
  axios
    .get(`${API_ENDPOINT}/news/categories`)
    .then(res => {
      const categories = res.data
      const validData = categories.map((item: any) => {
        const { id, slug, title } = item
        return {
          id,
          slug,
          title,
        }
      })
      dispatch({
        type: GET_CATEGORIES,
        payload: validData,
      })
    })
    .catch(err => console.error(err))
}
