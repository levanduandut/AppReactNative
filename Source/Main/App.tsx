import 'react-native-gesture-handler';
import React from 'react';
import Router from './Router';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

if (__DEV__) {
  require("./ReactotronConfig");
}
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

export default App;
