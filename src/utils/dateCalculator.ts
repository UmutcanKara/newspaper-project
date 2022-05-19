export const dateCalc = (dateDifference: number): string => {
  if (dateDifference < 3600) {
    return `${dateDifference / 60} mins ago`
  } else if (3600 < dateDifference && dateDifference < 3600 * 24) {
    return `${dateDifference / 3600} hours ago`
  } else if (3600 * 24 < dateDifference && dateDifference < 3600 * 24 * 7) {
    return `${dateDifference / (3600 * 24)} days ago`
  } else if (
    3600 * 24 * 7 < dateDifference &&
    dateDifference < 3600 * 24 * 30
  ) {
    return `${dateDifference / (3600 * 24 * 7)} weeks ago`
  } else if (
    3600 * 24 * 30 < dateDifference &&
    dateDifference < 3600 * 24 * 365
  ) {
    return `${dateDifference / (3600 * 24 * 30)} months ago`
  } else {
    return `${dateDifference / (3600 * 24 * 365)} years ago`
  }
}
