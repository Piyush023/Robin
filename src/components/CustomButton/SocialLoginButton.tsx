import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { FONTS } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

interface SocialButtonProps {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
}

const SocialLoginButton: React.FC<SocialButtonProps> = ({
  icon,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <CustomText variant={'h7'} fontFamily={FONTS.Medium} style={styles.text}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginVertical: 10,
    backgroundColor: Colors.light_background,
    borderWidth: 1,
    borderColor: '#DFDFDF',
  },
  text: {
    marginLeft: 10,
    color: Colors.richBlack,
  },
});

export default SocialLoginButton;
