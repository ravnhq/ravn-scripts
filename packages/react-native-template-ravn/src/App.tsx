import React, {useState, useCallback, useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import * as RNLocalize from 'react-native-localize';
import AppNavigator from './screens/MainStackNavigator';
import {ThemeProvider} from 'src/ui/styled-components';
import luxulTheme from 'src/ui/theme';
import {setI18nConfig} from './i18n';

const AppContainer = createAppContainer(AppNavigator);

const useForceUpdate = () => {
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);
  return forceUpdate;
};

export default function App() {
  setI18nConfig();

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const handleLocalizationChange = () => {
      setI18nConfig();
      forceUpdate();
    };

    RNLocalize.addEventListener('change', handleLocalizationChange);

    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  });

  const [theme] = React.useState(luxulTheme);

  return (
    <CurrentRouterContextProvider>
      <ThemeProvider theme={luxulTheme}>
        <AppContainer screenProps={{theme}} />
      </ThemeProvider>
    </CurrentRouterContextProvider>
  );
}
