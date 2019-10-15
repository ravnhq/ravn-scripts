import { NavigationScreenConfig } from 'react-navigation'
import {
  NavigationStackProp,
  NavigationStackOptions,
} from 'react-navigation-stack'
import { DefaultTheme } from 'styled-components'

const defaultNavigationOptions: NavigationScreenConfig<
  NavigationStackOptions,
  NavigationStackProp,
  { theme: DefaultTheme }
> = ({ screenProps }) => {
  return {
    headerBackTitle: null,
    headerTintColor: screenProps.theme.colors.primary,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTransparent: true,
  }
}

// The types for creating the navigator don't accept sceen props, casting those away
export default defaultNavigationOptions as NavigationScreenConfig<
  NavigationStackOptions,
  NavigationStackProp
>
