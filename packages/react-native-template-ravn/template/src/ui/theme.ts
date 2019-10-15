import { DefaultTheme } from 'styled-components/native'

const colors = {
  primary: '#77BA29',
  primary2: '#599517',
  primary3: '#49741B',
  info: '#6086B4',
  error: '#E26560',
  warning: '#FBEC9E',
  disabled: '#E7E7E7',
  black: '#333333',
  dark: '#65666C',
  medium: '#CDCED1',
  lightDark: '#F5F5F5',
  light: '#FAFAFA',
  white: '#FFFFFF',
}

const sizes = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 48,
  xxl: 56,
  xxxl: 64,
}

const theme: DefaultTheme = {
  colors,
  sizes,
}

export default theme
