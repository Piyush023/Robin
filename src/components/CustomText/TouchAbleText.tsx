import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { FONTS } from '../../constants/Fonts';
import CustomText from './CustomText';
import { Colors } from '../../constants/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from '@react-navigation/native';

interface TouchAbleTextProps {
  text: string;
  onPress: () => void;
  style?: TextStyle;
}

const TouchAbleText: React.FC<TouchAbleTextProps> = ({
  text,
  onPress,
  style,
}) => {
  const { colors } = useTheme();
  /* Imp - Apart from telling about the Theme this also tells about the color -  
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  */
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.touchAbleText, style, { color: colors.primary }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchAbleText: {
    fontFamily: FONTS.Medium,
    fontSize: RFPercentage(1.5),
    marginTop: 5,
  },
});

export default TouchAbleText;
