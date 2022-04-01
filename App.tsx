/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components';

import defaultTheme from './src/global/styles/themes/default';
import RegisterRoutes from './src/routes/register.routes';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <RegisterRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
