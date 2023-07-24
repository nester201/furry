import React, { memo, useCallback } from 'react';
import ArrowSVG from '../../../assets/icons/arrow.svg';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  color: string;
};

const BackButton: React.FC<Props> = ({ color }) => {
  const navigation = useNavigation();

  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePressBack}>
      <ArrowSVG width={32} height={32} fill={color} />
    </TouchableOpacity>
  );
};

export default memo(BackButton);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 5,
  },
});
