import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import Layout from '@components/layout/Layout';
import colors from '@theme/colors';
import HeaderPets from '@components/Pet/HeaderPet';
import { IPet } from '@app/interface/IPet';
import { getKeyExtractorIds } from '@app/utils/keyExtractor';
import PetsListItem from '@components/Pet/PetsListItem';
import OpacityButton from '@ui/OpacityButton';
import { usePets } from '@hooks/usePets';
import { useNavigationApp } from '@hooks/useNavigationApp';
import Loader from '@ui/Loader';

const renderItem: ListRenderItem<IPet> = ({ item }) => <PetsListItem pet={item} />;

const MePetScreen = () => {
  const { navigate } = useNavigationApp();
  const { pets, isLoading } = usePets();

  const handlePressAdd = useCallback(() => {
    navigate('AddPetScreen');
  }, [navigate]);

  return (
    <Layout backgroundColor={colors.lightGrey}>
      <HeaderPets title="My pets" />
      <View style={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={pets}
            keyExtractor={getKeyExtractorIds}
            renderItem={renderItem}
            contentContainerStyle={styles.containerList}
          />
        )}
        <OpacityButton title="Add pets" onPress={handlePressAdd} />
      </View>
    </Layout>
  );
};

export default MePetScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  containerList: {
    paddingVertical: 16,
    gap: 30,
  },
});
