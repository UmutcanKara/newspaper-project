import { GET_NEWS, GET_CATEGORIES } from "../actions/types"

import {
  ArticleStateInterface,
  ArticleReducerInterface,
} from "../interfaces/reducerInterfaces/article"

const initialState: ArticleStateInterface = {
  articles: [],
  nextPage: 1,
  categoryCount: {
    business: 0,
    entertainment: 0,
    general: 0,
    health: 0,
    science: 0,
    sports: 0,
    technology: 0,
  },
  categories: [],
}

const articleReducer: ArticleReducerInterface = (
  state = initialState,
  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        articles: [...state.articles, ...payload.results],
        nextPage: payload.nextPage,
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      }
    default:
      return state
  }
}

export default articleReducer
