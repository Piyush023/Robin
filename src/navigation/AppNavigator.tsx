import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../utils/NavigationUtil';
import { useCustomTheme } from './Theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './RootNavigator';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const theme = useCustomTheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      text: theme.colors.text,
      card: theme.colors.card,
      border: theme.colors.border,
      notification: theme.colors.notification,
      primary: theme.colors.primary,
    },
  };

  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
