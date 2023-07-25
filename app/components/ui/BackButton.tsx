import React, { memo, useCallback, useMemo } from 'react';
import ArrowSVG from '../../../assets/icons/arrow.svg';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  color: string;
  style?: ViewStyle;
};

const BackButton: React.FC<Props> = ({ color, style }) => {
  const navigation = useNavigation();

  const containerStyle = useMemo(() => [styles.container, style && style], [style]);

  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity style={containerStyle} onPress={handlePressBack}>
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
