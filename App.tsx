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

import {ThemeProvider} from 'styled-components';

import {Onboarding} from './src/screens/onboarding/container';

import defaultTheme from './src/global/styles/themes/default';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Onboarding />
    </ThemeProvider>
  );
};

export default App;
