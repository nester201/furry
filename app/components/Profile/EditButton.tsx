import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import EditSVG from '../../../assets/icons/edit.svg';
import colors from '@theme/colors';
import { useNavigationApp } from '@hooks/useNavigationApp';

const EditButton = () => {
  const { navigate } = useNavigationApp();

  const handlePressEdit = useCallback(() => {
    navigate('EditProfile');
  }, [navigate]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePressEdit}>
      <EditSVG width={24} height={24} />
      <Text style={styles.text}>Edit</Text>
    </TouchableOpacity>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 30,
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.violet,
  },
});
