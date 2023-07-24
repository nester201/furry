import React, { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import GroomingSVG from '../../../../assets/icons/grooming.svg';
import VetSVG from '../../../../assets/icons/vet.svg';
import { useNavigationApp } from '@hooks/useNavigationApp';
import SignInButton from '@components/Auth/SignInButton';
import MainAction from '@ui/MainAction';
import Steps from '@components/Welcome/Steps';
import WelcomeText from '@components/Welcome/WeclomeText';
import MainButton from '@ui/MainButton';
import colors from '@theme/colors';

const WelcomeScreenSecond = () => {
  const { navigate } = useNavigationApp();

  const handlePressNext = useCallback(() => {
    navigate('WelcomeScreenThird');
  }, [navigate]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <SignInButton />
      </View>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <MainAction size={84}>
            <GroomingSVG width={40} height={40} />
          </MainAction>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('../../../../assets/images/dog_2.png')} />
        </View>
        <View style={styles.bottomWrapper}>
          <MainAction size={84}>
            <VetSVG width={40} height={40} />
          </MainAction>
        </View>
      </View>
      <Steps step={2} />
      <View style={styles.actionWrapper}>
        <WelcomeText title={'Proven experts'} subtitle={'We interview every specialist before they get to work.'} />
        <View style={styles.buttonWrapper}>
          <MainButton title={'Next'} onPress={handlePressNext} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreenSecond;

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
    paddingHorizontal: 40,
  },
  bottomWrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryColor,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 170,
    borderTopRightRadius: 110,
    borderTopLeftRadius: 170,
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
