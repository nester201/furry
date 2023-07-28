import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import EditSVG from '../../../assets/icons/edit.svg';
import colors from '@theme/colors';

type Props = {
  onPress: () => void;
  style?: ViewStyle;
};

const EditButton: React.FC<Props> = ({ onPress, style }) => {
  const containerStyle = useMemo(() => [styles.container, style && style], []);

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <EditSVG width={24} height={24} />
      <Text style={styles.text}>Edit</Text>
    </TouchableOpacity>
  );
};

export default memo(EditButton);

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
