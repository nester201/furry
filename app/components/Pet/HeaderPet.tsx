import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '@ui/BackButton';
import colors from '@theme/colors';
import { TEXT, TEXT_H3 } from '@theme/style';
type Props = {
  title: string;
  isEditPet?: boolean;
};

const HeaderPets: React.FC<Props> = ({ title, isEditPet }) => {
  const containerStyle = useMemo(() => [styles.container, isEditPet && styles.border], []);

  return (
    <View style={containerStyle}>
      <BackButton color={colors.violet} style={{ top: -6.5 }} />
      <View>
        <Text style={TEXT_H3}>{title}</Text>
      </View>
      {isEditPet && (
        <TouchableOpacity style={styles.actionStyle}>
          <Text style={[TEXT, { color: colors.violet, fontWeight: '600' }]}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderPets;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: colors.lightGrey,
  },
  actionStyle: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
});
