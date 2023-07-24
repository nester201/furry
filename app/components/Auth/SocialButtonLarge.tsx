import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import GoogleSVG from '../../../assets/icons/google.svg';
import FbSVG from '../../../assets/icons/facebook.svg';
import colors from '@theme/colors';

const SocialButtonLarge = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionFb}>
        <FbSVG width={30} height={30} fill={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionGoogle}>
        <GoogleSVG width={30} height={30} fill={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtonLarge;

const actionStyle: ViewStyle = {
  width: 56,
  height: 56,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 55,
  },
  actionFb: {
    ...actionStyle,
    backgroundColor: '#3D5C98',
  },
  actionGoogle: {
    ...actionStyle,
    backgroundColor: 'red',
  },
});
