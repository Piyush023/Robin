import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { normalizeHeight } from '../../utils/Scaling';
import Logo from '../../assets/images/logo_text.png';

const CenteredLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.imageStyles} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: normalizeHeight(30),
    width: normalizeHeight(110),
  },
  imageStyles: {
    width: '100%',
    height: '100%',
  },
});

export default CenteredLogo;
