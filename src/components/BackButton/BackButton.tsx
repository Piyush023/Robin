import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { goBack } from '../../utils/NavigationUtil';

const BackButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => goBack()}>
      <Icon name={'arrow-back'} size={RFValue(20)} color={Colors.dark_text} />
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
