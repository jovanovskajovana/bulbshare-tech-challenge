const colors = {
  white: '#fff',
  black: '#172b4d',
  blue: '#126ae8',
  grey_500: '#d8dee4',
  grey_400: '#f6f8fa',
  transparent: 'transparent',
}

export interface Theme {
  // background
  backgroundPrimary: string
  backgroundSecondary: string
  // text
  textPrimary: string
  textSecondary: string
}

export const theme: Theme = {
  // background
  backgroundPrimary: colors.white,
  backgroundSecondary: colors.black,
  // text
  textPrimary: colors.black,
  textSecondary: colors.grey_400,
}
