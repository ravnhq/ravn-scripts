import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from 'src/screens/MainScreen'
import defaultNavigationOptions from 'src/navigation/defaultNavigationOptions'

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    /**
     * Modals
     */
    // [Route.EULAModal]: {
    //   screen: EULAModal,
    // },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions,
  },
)

export default RootStack
