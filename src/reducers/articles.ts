import { AnyAction } from "redux"
import { GET_NEWS, GET_MORE_NEWS } from "../actions/types"

import { ArticleStateInterface } from "./../interfaces/article"

const initialState: ArticleStateInterface = {
  articles: [],
  count: 1,
}

const articleReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action
  switch (type) {
    case GET_NEWS:
      return { ...state, articles: payload }

    case GET_MORE_NEWS:
      return {
        count: payload.count,
        articles: [...state.articles, ...payload.articles],
      }

    default:
      return state
  }
}

export default articleReducer
