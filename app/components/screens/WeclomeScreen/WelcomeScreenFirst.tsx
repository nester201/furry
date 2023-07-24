import React, { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import GroomingSVG from '../../../../assets/icons/grooming.svg';
import VetSVG from '../../../../assets/icons/vet.svg';
import BoardingSVG from '../../../../assets/icons/boarding.svg';
import TaxiSVG from '../../../../assets/icons/taxi.svg';
import DateSVG from '../../../../assets/icons/date.svg';
import WalkingSVG from '../../../../assets/icons/dog_walking.svg';
import Steps from '@components/Welcome/Steps';
import { useNavigationApp } from '@hooks/useNavigationApp';
import MainButton from '@ui/MainButton';
import SignInButton from '@components/Auth/SignInButton';
import MainAction from '@components/ui/MainAction';
import WelcomeText from '@components/Welcome/WeclomeText';
import colors from '@theme/colors';

const WelcomeScreenFirst: React.FC = () => {
  const { navigate } = useNavigationApp();

  const handlePressNext = useCallback(() => {
    navigate('WelcomeScreenSecond');
  }, [navigate]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <SignInButton firstScreen />
      </View>
      <View style={styles.container}>
        <View style={styles.wrapperRight}>
          <MainAction size={64}>
            <VetSVG width={35} height={35} />
          </MainAction>
          <MainAction size={64} style={{ marginLeft: 37 }}>
            <BoardingSVG width={35} height={35} />
          </MainAction>
          <MainAction size={64} style={{ marginLeft: 14 }}>
            <TaxiSVG width={35} height={35} />
          </MainAction>
        </View>
        <View style={styles.wrapperImage}>
          <Image source={require('../../../../assets/images/dog_1.png')} />
        </View>
        <View style={styles.wrapperLeft}>
          <MainAction size={64}>
            <GroomingSVG width={35} height={35} />
          </MainAction>
          <MainAction size={64} style={{ marginRight: 26 }}>
            <DateSVG width={35} height={35} />
          </MainAction>
          <MainAction size={64}>
            <WalkingSVG width={35} height={35} />
          </MainAction>
        </View>
      </View>
      <Steps step={1} />
      <View style={styles.actionWrapper}>
        <WelcomeText
          title={'Welcome to Furry'}
          subtitle={'All types of services for your pet in one place, instantly searchable.'}
        />
        <View style={styles.buttonWrapper}>
          <MainButton title={'Next'} onPress={handlePressNext} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreenFirst;

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
    marginTop: 15,
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: colors.secondaryColor,
    paddingBottom: 20,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    borderTopRightRadius: 90,
    borderTopLeftRadius: 20,
    marginBottom: 10,
  },
  wrapperImage: {
    marginTop: 35,
    flex: 1,
    alignItems: 'center',
  },
  wrapperRight: {
    marginTop: 36,
    gap: 30,
  },
  wrapperLeft: {
    marginTop: 10,
    gap: 30,
    alignItems: 'flex-end',
    paddingHorizontal: 50,
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
