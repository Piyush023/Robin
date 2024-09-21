import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from './src/constants/Colors';
import { useCustomTheme } from './src/navigation/Theme';

const AppStyle = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
  } as ViewStyle,
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
