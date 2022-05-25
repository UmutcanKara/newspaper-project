export const isNearPageEnd = (element: any): boolean => {
  const bounding = element.getBoundingClientRect()
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerHeight || document.documentElement.clientWidth)
  )
}
