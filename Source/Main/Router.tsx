import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Constants } from 'base-common';
import { FindInter, Home, OnGoing, OnGoingMap, ProfileInter, Role, SignIn, SignUp, Supporting } from 'base-screen';
import React from 'react';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

const commonNavigationOption: any = {
  headerShown: false,
  gestureEnabled: true
}


export default function (props: any) {

  return <Stack.Navigator>
    <Stack.Screen name={Constants.Screen.Role} component={Role} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.Home} component={Home} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.SignIn} component={SignIn} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.OnGoingMap} component={OnGoingMap} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.FindInter} component={FindInter} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.OnGoing} component={OnGoing} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.ProfileInter} component={ProfileInter} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.SignUp} component={SignUp} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.Supporting} component={Supporting} options={commonNavigationOption} />
  </Stack.Navigator>
}
