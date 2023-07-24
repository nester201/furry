import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '@theme/colors';
import FbSVG from '../../../assets/icons/fb_icon.svg';
import GoogleSVG from '../../../assets/icons/google.svg';

type Props = {
  google?: boolean;
};

const SocialButton: React.FC<Props> = ({ google }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapper}>
        {google ? <GoogleSVG width={26} height={26} /> : <FbSVG width={26} height={26} />}
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Continue with</Text>
          <Text style={styles.social}>{google ? 'Google' : 'Facebook'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SocialButton);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 14,
    paddingBottom: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  textWrapper: {
    flexDirection: 'row',
    gap: 7,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    color: colors.violet,
    letterSpacing: 0.16,
  },
  social: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.violet,
  },
});
