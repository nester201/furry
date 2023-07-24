import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '@theme/colors';

type Props = {
  isReg?: boolean;
  onPress: () => void;
};

const AuthButton: React.FC<Props> = ({ isReg, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{isReg ? 'Registration' : 'Let`s go'}</Text>
    </TouchableOpacity>
  );
};

export default memo(AuthButton);

const styles = StyleSheet.create({
  container: {
    width: '75%',
    paddingVertical: 20,
    backgroundColor: '#20C3AF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: colors.white,
  },
});
