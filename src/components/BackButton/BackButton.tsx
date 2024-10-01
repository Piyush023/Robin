import React from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { goBack } from '../../utils/NavigationUtil';
import { useTheme } from '@react-navigation/native';

const BackButton: React.FC<{ onPress?: () => void }> = ({ onPress }) => {
  const theme = useColorScheme();
  const onPressCallback = () => {
    if (onPress) {
      return onPress();
    } else {
      return goBack();
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPressCallback}>
      <Icon
        name={'arrow-back'}
        size={RFValue(20)}
        color={theme === 'dark' ? Colors.dark_text : Colors.richBlack}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '20%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default BackButton;
