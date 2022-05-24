import { getNewsType, getMoreNewsType } from "../actionInterfaces/article"
import { ArticleStateInterface } from "../reducerInterfaces/article"
import { ReactNode } from "react"

// Component Interfaces

export interface LayoutProps {
  children: ReactNode
  isLoggedIn?: boolean
  articleReducer: any
  getNews: getNewsType
  getCategories: () => void
}

export interface ILayoutPubHeader {
  articles: ArticleStateInterface
  getNews: getNewsType
}
export interface ILayoutPrivHeader {}

export interface ILayoutFooter {
  getMoreNews: getMoreNewsType
}

// Util Types
export type TCategories = {
  id: number
  slug: string
  title: string
}[]

// Function types
export type TCategoryClick = (id: number, categoryName?: string) => void
