import React, { FC } from "react"

import { IButton } from "../../interfaces/componentInterfaces/button"

import styles from "../../styles/components/button.module.css"

const Button: FC<IButton> = ({ children, onClick, className, id = "" }) => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    onClick()
  }

  let classes = styles.button
  if (className) classes += ` ${className}`

  return (
    <button onClick={e => onClickHandler(e)} id={id} className={classes}>
      {children}
    </button>
  )
}

export default Button
