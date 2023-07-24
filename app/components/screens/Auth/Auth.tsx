import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundGradient from '@ui/BackgroundGradient';
import colors from '@theme/colors';
import BackButton from '@ui/BackButton';
import RegisterForm from '@components/Auth/RegisterForm';
import SecondaryText from '@components/Auth/SecondaryText';
import SocialButtonLarge from '@components/Auth/SocialButtonLarge';
import { TEXT } from '@theme/style';

type Props = {
  reg?: boolean;
};

const Auth: React.FC<Props> = ({ reg }) => {
  return (
    <BackgroundGradient style={styles.container}>
      <View style={styles.wrapper}>
        <RegisterForm isReg={reg} />
        <View style={styles.header}>
          <BackButton color={colors.white} />
          <View style={styles.headerWrapper}>
            <Text style={styles.mainText}>{reg ? 'Registration' : 'Sign In'}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{ flex: 2 }}></View>
          <Text style={[TEXT, { marginBottom: 20 }]}>or continue with</Text>
          <View style={styles.socialWrapper}>
            <SocialButtonLarge />
          </View>
          <SecondaryText colorText={colors.black} colorSignIn={colors.violet} signIn={!reg} />
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default memo(Auth);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 1.5,
    paddingTop: 50,
  },
  headerWrapper: {
    position: 'relative',
    flex: 0.5,
    paddingHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  mainText: {
    fontWeight: '700',
    fontSize: 34,
    color: colors.white,
  },
  footer: {
    flex: 2,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
  },
  socialWrapper: {
    flex: 1,
  },
});
