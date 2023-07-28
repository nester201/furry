import React, { memo } from 'react';
import Layout from '@components/layout/Layout';
import colors from '@theme/colors';
import HeaderPets from '@components/Pet/HeaderPet';
import { useTypedRoute } from '@hooks/useRoutesApp';
import FilledView from '@ui/FilledView';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from '@ui/Avatar';
import { TEXT_H3 } from '@theme/style';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { IPet } from '@app/interface/IPet';
import Input from '@ui/Input';
import GenderButton from '@components/screens/Profile/GenderButton';
import { usePet } from '@hooks/usePet';
import Loader from '@ui/Loader';

const EditPetScreen = () => {
  const { control, handleSubmit, ...fetchMore } = useForm<IPet>();
  const { params } = useTypedRoute();
  const petId = params?.petId;
  const { pet, isLoading } = usePet(petId || '');

  return (
    <Layout backgroundColor={colors.white}>
      <HeaderPets title="Edit pet" isEditPet />
      {!pet && isLoading ? (
        <Loader />
      ) : (
        <FormProvider control={control} handleSubmit={handleSubmit} {...fetchMore}>
          <FilledView style={{ paddingHorizontal: 20 }}>
            <View style={styles.avatarWrapper}>
              <Avatar size={112} />
            </View>
            <Text style={[TEXT_H3, { textAlign: 'left' }]}>General</Text>
            <Text style={[TEXT_H3, { textAlign: 'left', marginBottom: 20 }]}>information</Text>
            <Controller
              control={control}
              defaultValue={pet.petName}
              name={'petName'}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} placeholder={'Pet`s name'} style={styles.fieldStyle} />
              )}
            />
            <Controller
              control={control}
              name={'speciesPet'}
              defaultValue={pet.speciesPet}
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
              defaultValue={pet.breed}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} placeholder={'Breed'} style={styles.fieldStyle} />
              )}
            />
            <Controller
              control={control}
              name={'gender'}
              defaultValue={pet.gender}
              render={({ field: { value, onChange } }) => <GenderButton value={value} onChange={onChange} />}
            />
          </FilledView>
        </FormProvider>
      )}
    </Layout>
  );
};

export default memo(EditPetScreen);

const styles = StyleSheet.create({
  avatarWrapper: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  fieldStyle: {
    marginBottom: 20,
  },
});
