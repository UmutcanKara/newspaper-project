import { AnyAction } from "redux"

export interface ArticleStateInterface {
  articles: any[]
  nextPage: number
  categoryCount: {
    technology: number
    sports: number
    science: number
    health: number
    general: number
    entertainment: number
    business: number
  }
  categories: {
    id: number
    slug: string
    title: string
  }[]
}

export type ArticleReducerInterface = (
  state: ArticleStateInterface,
  action: AnyAction
) => ArticleStateInterface
