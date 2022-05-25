export const minimalize = (str: string): string =>
  str.length > 40 ? str.substring(0, 39) : str
