import React, { useCallback } from 'react';
import Layout from '@components/layout/Layout';
import colors from '@theme/colors';
import HeaderPets from '@components/Pet/HeaderPet';
import FilledView from '@ui/FilledView';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@ui/Input';
import GenderButton from '@components/screens/Profile/GenderButton';
import { useAddPet } from '@hooks/useAddPet';
import { StyleSheet } from 'react-native';
import MainButton from '@ui/MainButton';
import { IPet } from '@app/interface/IPet';
import EditAvatar from '@ui/EditAvatar';
import { useUpload } from '@hooks/useUpload';

const AddPetsScreen = () => {
  const { control, handleSubmit, ...fetchMore } = useForm<IPet>();
  const { isLoading, onAddPet } = useAddPet();
  const { url, uploadAvatar } = useUpload();

  const onSubmit: SubmitHandler<IPet> = useCallback(
    async data => {
      await uploadAvatar(data.avatar);
      await onAddPet(data, url);
    },
    [onAddPet, uploadAvatar, url]
  );

  return (
    <Layout backgroundColor={colors.white}>
      <HeaderPets title="Add new pet" />
      <FormProvider control={control} handleSubmit={handleSubmit} {...fetchMore}>
        <FilledView style={{ paddingHorizontal: 20 }}>
          <Controller
            control={control}
            name={'avatar'}
            rules={{ required: false }}
            render={({ field: { onChange } }) => <EditAvatar onChange={onChange} />}
          />
          <Controller
            control={control}
            name={'petName'}
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChangeText={onChange} placeholder={'Pet`s name'} style={styles.fieldStyle} />
            )}
          />
          <Controller
            control={control}
            name={'speciesPet'}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder={'Species of your pet'}
                style={styles.fieldStyle}
              />
            )}
          />
          <Controller
            control={control}
            name={'breed'}
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChangeText={onChange} placeholder={'Breed'} style={styles.fieldStyle} />
            )}
          />
          <Controller
            control={control}
            name={'gender'}
            render={({ field: { value, onChange } }) => <GenderButton value={value} onChange={onChange} />}
          />
          <MainButton title="Save" onPress={handleSubmit(onSubmit)} loading={isLoading} />
        </FilledView>
      </FormProvider>
    </Layout>
  );
};

export default AddPetsScreen;

const styles = StyleSheet.create({
  avatarWrapper: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  fieldStyle: {
    marginBottom: 20,
  },
});
