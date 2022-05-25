import { ReactNode } from "react"

export interface IButton {
  children: ReactNode
  onClick: Function
  className?: string
  id?: string
}
