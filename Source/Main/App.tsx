import React from 'react';
import { SafeAreaView, } from 'react-native';

import styles from './App.Style';
import Router from './Router';
import { Role } from 'base-screen';

if (__DEV__) {
  require("./ReactotronConfig");
}
import { NavigationContainer } from '@react-navigation/native';
function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
