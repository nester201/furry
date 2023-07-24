import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigationApp } from '@hooks/useNavigationApp';
import SignInButton from '@components/Auth/SignInButton';
import Rating from '@components/Welcome/Rating';
import Steps from '@components/Welcome/Steps';
import WelcomeText from '@components/Welcome/WeclomeText';
import MainButton from '@ui/MainButton';
import colors from '@theme/colors';

const WelcomeScreenThird = () => {
  const { navigate } = useNavigationApp();

  const handlePressStarted = useCallback(() => {
    navigate('ChooseAuth');
  }, [navigate]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <SignInButton />
      </View>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Text style={{ textAlign: 'left' }}>Rating paws:</Text>
          <Rating welcomeScreen />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('../../../../assets/images/dog_3png.png')} />
        </View>
      </View>
      <Steps step={3} />
      <View style={styles.actionWrapper}>
        <WelcomeText
          title={'Reliable reviews'}
          subtitle={'A rating paws be left only by a user who used the service.'}
        />
        <View style={styles.buttonWrapper}>
          <MainButton title={'Next'} onPress={handlePressStarted} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreenThird;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.white,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1.5,
    justifyContent: 'center',
  },
  topWrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: 40,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: colors.secondaryColor,
    borderBottomLeftRadius: 170,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 170,
    borderTopLeftRadius: 90,
  },
  actionWrapper: {
    flex: 1,
    gap: 48,
    marginTop: 55,
    paddingHorizontal: 30,
  },
  buttonWrapper: {
    paddingHorizontal: 30,
  },
});
