import { AnyAction } from "redux"

export interface ArticleStateInterface {
    articles: any[]
    count: number
}

export interface ArticleReducerInterface {
    state: ArticleStateInterface,
    action: AnyAction
}