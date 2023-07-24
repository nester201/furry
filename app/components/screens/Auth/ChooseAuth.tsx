import React, { useCallback } from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import { MAIN_CONTAINER } from '@theme/style';
import BackgroundGradient from '@ui/BackgroundGradient';
import colors from '@theme/colors';
import SocialButton from '@components/Auth/SocialButton';
import MainButton from '@ui/MainButton';
import { useNavigationApp } from '@hooks/useNavigationApp';
import SecondaryText from '@components/Auth/SecondaryText';

const ChooseAuth = () => {
  const { navigate } = useNavigationApp();

  const handlePressRegEmail = useCallback(() => {
    navigate('RegisterScreen');
  }, [navigate]);

  return (
    <BackgroundGradient style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={textStyle}>Welcome</Text>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <Text style={textStyle}>to</Text>
          <Text style={styles.textColor}>Furry</Text>
        </View>
      </View>
      <View style={styles.wrapperSocial}>
        <SocialButton />
        <SocialButton google />
        <MainButton title={'Register with Email'} onPress={handlePressRegEmail} border style={{ marginTop: 24 }} />
      </View>
      <SecondaryText />
    </BackgroundGradient>
  );
};

export default ChooseAuth;

const textStyle: TextStyle = {
  fontWeight: '700',
  fontSize: 44,
  color: colors.white,
};

const styles = StyleSheet.create({
  container: {
    ...MAIN_CONTAINER,
    paddingHorizontal: 40,
  },
  textWrapper: {
    flex: 1.5,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  textColor: {
    ...textStyle,
    color: colors.yellow,
  },
  wrapperSocial: {
    flex: 1.3,
    gap: 24,
  },
});
