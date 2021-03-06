/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components';

import defaultTheme from './src/global/styles/themes/default';
import {Routes} from './src/routes';

//  redux
import store from './src/redux/store';
import {Provider} from 'react-redux';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
