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
  categories: string[]
}

export type ArticleReducerInterface = (
  state: ArticleStateInterface,
  action: AnyAction
) => ArticleStateInterface

export type getNewsType = (page?: number, q?: string, category?: string) => void
