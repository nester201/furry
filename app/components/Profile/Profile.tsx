import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import FilledView from '@ui/FilledView';
import HeaderProfile from '@components/Profile/HeaderProfile';
import ProfileActions from '@components/Profile/ProfileActions';
import PetSVG from '../../../assets/icons/profileActions/pet.svg';
import LikeSVG from '../../../assets/icons/profileActions/like.svg';
import MedicSVG from '../../../assets/icons/profileActions/medic.svg';
import InviteSVG from '../../../assets/icons/profileActions/announcement.svg';
import QuestionSVG from '../../../assets/icons/profileActions/question.svg';
import SettingSVG from '../../../assets/icons/profileActions/settings.svg';
import colors from '@theme/colors';
import { useNavigationApp } from '@hooks/useNavigationApp';

const Profile = () => {
  const { navigate } = useNavigationApp();

  const handlePressMyPet = useCallback(() => {
    navigate('MyPetScreen');
  }, []);

  return (
    <FilledView style={styles.container}>
      <HeaderProfile title="Profile" />
      <FilledView>
        <ProfileActions title={'My pets'} onPress={handlePressMyPet}>
          <PetSVG width={24} height={24} fill={colors.violet} />
        </ProfileActions>
        <ProfileActions title={'My favourites'}>
          <LikeSVG width={24} height={24} />
        </ProfileActions>
        <ProfileActions title={'Add pet service'}>
          <MedicSVG width={24} height={24} />
        </ProfileActions>
        <ProfileActions title={'Invite friends'}>
          <InviteSVG width={24} height={24} />
        </ProfileActions>
        <ProfileActions title={'Help'}>
          <QuestionSVG width={24} height={24} style={{ zIndex: 2 }} />
        </ProfileActions>
        <ProfileActions title={'Settings'}>
          <SettingSVG width={24} height={24} />
        </ProfileActions>
      </FilledView>
    </FilledView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
  },
});
