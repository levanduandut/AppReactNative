import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Constants } from 'base-common';
import { FindInter, Home, Role, SignIn } from 'base-screen';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

const commonNavigationOption: any = {
  headerShown: false,
  gestureEnabled: true
}


export default function (props: any) {

  return <Stack.Navigator>
    <Stack.Screen name={Constants.Screen.FindInter} component={FindInter} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.Home} component={Home} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.Role} component={Role} options={commonNavigationOption} />
    <Stack.Screen name={Constants.Screen.SignIn} component={SignIn} options={commonNavigationOption} />
  </Stack.Navigator>
}
