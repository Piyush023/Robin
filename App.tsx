import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { useCustomTheme } from './src/navigation/Theme';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const AppStyle = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
  } as ViewStyle,
});

GoogleSignin.configure({
  webClientId:
    '944347476169-d90f7vhdqhvjkn1b31h332r8epqe5rqq.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  iosClientId:
    '944347476169-1c1ikrh9krvkeeo6n5it55ggtoq2tp9v.apps.googleusercontent.com',
});

const App: React.FC = () => {
  const Theme = useCustomTheme();

  return (
    <SafeAreaView
      style={[
        AppStyle.appContainer,
        { backgroundColor: Theme.colors.background },
      ]}
    >
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
