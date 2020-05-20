import React from 'react';
import { StatusBar, YellowBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
