import {useContext} from 'react';
import * as styledComponents from 'styled-components/native';

import theme from './theme';

const {
  default: styled,
  css,
  ThemeProvider,
  ThemeContext,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  typeof theme
>;

const useTheme = () => useContext(ThemeContext);

export {css, ThemeProvider, useTheme, ThemeContext};
export default styled;
