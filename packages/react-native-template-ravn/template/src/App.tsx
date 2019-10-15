import React, {useState, useCallback, useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import * as RNLocalize from 'react-native-localize';
import {ApolloProvider} from '@apollo/react-hooks';
import MainStack from './screens/MainStack';
import {ThemeProvider} from '@styled-components';
import theme from 'src/ui/theme';
import {setI18nConfig} from './i18n';
import client from 'src/graphql/client';

const AppContainer = createAppContainer(MainStack);

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

  // This is a piece of state so we have the option to change it
  const [selectedTheme] = React.useState(theme);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AppContainer screenProps={{theme: selectedTheme}} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
