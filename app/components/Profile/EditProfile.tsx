import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import FilledView from '@ui/FilledView';
import colors from '@theme/colors';
import HeaderProfile from '@components/Profile/HeaderProfile';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IProfile } from '@app/interface/IProfile';
import Input from '@ui/Input';
import { useProfile } from '@hooks/useProfile';
import GenderButton from '@components/screens/Profile/GenderButton';
import { useAuth } from '@hooks/useAuth';
import Loader from '@ui/Loader';
import MainButton from '@ui/MainButton';
import { useUpdateProfile } from '@hooks/useUpdateProfile';

const EditProfile = () => {
  const { user } = useAuth();
  const { isLoading, name, profile } = useProfile();
  const { isLoading: loadingUpdate, updateProfile } = useUpdateProfile();
  const { control, handleSubmit, ...fetchMore } = useForm<IProfile>();

  const onSubmit: SubmitHandler<IProfile> = useCallback(
    async data => {
      if (profile) {
        await updateProfile(data, profile.docId);
      }
    },
    [updateProfile]
  );

  return (
    <FilledView style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderWrapper}>
          <Loader />
        </View>
      ) : (
        <FormProvider control={control} handleSubmit={handleSubmit} {...fetchMore}>
          <HeaderProfile title="Edit profile" isEdit />
          <View style={styles.wrapper}>
            <Controller
              control={control}
              name={'displayName'}
              defaultValue={name}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} placeholder={'Name'} style={styles.fieldStyle} />
              )}
            />
            <Controller
              control={control}
              name={'city'}
              defaultValue={profile?.city}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} placeholder={'City'} style={styles.fieldStyle} />
              )}
            />
            <Controller
              control={control}
              name={'gender'}
              defaultValue={profile?.gender}
              render={({ field: { value, onChange } }) => <GenderButton value={value} onChange={onChange} />}
            />
            <Controller
              control={control}
              name={'email'}
              defaultValue={user?.email || ''}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} placeholder={'Email'} style={styles.fieldStyle} />
              )}
            />
            <Controller
              control={control}
              name={'phoneNumber'}
              defaultValue={profile?.phoneNumber}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value.toString()}
                  keyboardType={'number-pad'}
                  onChangeText={onChange}
                  placeholder={'Phone number'}
                  style={styles.fieldStyle}
                />
              )}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <MainButton title="Save" onPress={handleSubmit(onSubmit)} loading={loadingUpdate} />
          </View>
        </FormProvider>
      )}
    </FilledView>
  );
};

export default memo(EditProfile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 3,
    paddingHorizontal: 20,
  },
  fieldStyle: {
    marginBottom: 20,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
    paddingBottom: 16,
  },
});
