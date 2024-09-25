import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import EmailScreen from '../screens/EmailScreen/EmailScreen';
import { Routes } from './Routes';

const Stack = createNativeStackNavigator(); // * This is must for the working of the Stack and it comes from the library of the react-navigation/native-stack *

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN_SCREEN}
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={Routes.EMAIL_SCREEN} component={EmailScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
