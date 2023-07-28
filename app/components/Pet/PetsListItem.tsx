import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BOX_SHADOW, TEXT, TEXT_H2 } from '@theme/style';
import Avatar from '@ui/Avatar';
import colors from '@theme/colors';
import { IPet } from '@app/interface/IPet';
import EditButton from '@ui/EditButton';
import { useNavigationApp } from '@hooks/useNavigationApp';

type Props = {
  pet: IPet;
};

const PetsListItem: React.FC<Props> = ({ pet }) => {
  const { navigate } = useNavigationApp();

  const handlePressEdit = useCallback(() => {
    navigate('EditPetScreen', { petId: pet.id });
  }, [navigate]);

  return (
    <View style={styles.container}>
      <EditButton onPress={handlePressEdit} style={{ top: 23, right: 23 }} />
      <Avatar size={112} />
      <Text style={styles.username}>{pet.petName}</Text>
      <Text style={styles.city}>{pet.breed}</Text>
    </View>
  );
};

export default memo(PetsListItem);

const styles = StyleSheet.create({
  container: {
    ...BOX_SHADOW,
    backgroundColor: colors.white,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  username: {
    ...TEXT_H2,
    marginTop: 30,
  },
  city: {
    ...TEXT,
    color: colors.placeholder,
    marginTop: 5,
  },
});
