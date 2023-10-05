const colors = {
  white: '#fff',
  black: '#0d1116',
  blue: '#126ae8',
  grey_500: '#656d76',
  grey_400: '#d8dee4',
  grey_300: '#f7f9fa',
  transparent: 'transparent',
}

export interface Theme {
  // background
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundDark: string
  backgroundHighlight: string
  // text
  textPrimary: string
  textSecondary: string
  textReverse: string
  textHighlight: string
  // border
  borderPrimary: string
  // common
  transparent: string
}

export const theme: Theme = {
  // background
  backgroundPrimary: colors.white,
  backgroundSecondary: colors.grey_300,
  backgroundDark: colors.black,
  backgroundHighlight: colors.blue,
  // text
  textPrimary: colors.black,
  textSecondary: colors.grey_500,
  textReverse: colors.white,
  textHighlight: colors.blue,
  // border
  borderPrimary: colors.grey_400,
  // common
  transparent: colors.transparent,
}
