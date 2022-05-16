import { ReactNode } from "react"

import { getNewsType } from "./article"

export interface LayoutProps {
  children: ReactNode
  isLoggedIn?: boolean
  articleReducer: any
  getNews: getNewsType
  getCategories: () => void
}
