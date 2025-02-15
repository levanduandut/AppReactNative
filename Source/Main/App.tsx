import React from 'react';

import Router from './Router';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

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
