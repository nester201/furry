import React, { memo, ReactNode, useMemo } from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { BOX_SHADOW } from '@theme/style';
import colors from '@theme/colors';

type Props = {
  children: ReactNode;
  title?: string;
  size: number;
  style?: ViewStyle;
};

const MainAction: React.FC<Props> = ({ children, title, size, style }) => {
  const containerStyle = useMemo(() => [styles.container, style && style, { width: size, height: size }], [size]);

  return (
    <Pressable style={[containerStyle]}>
      {children}
      {title && <Text style={styles.text}>{title}</Text>}
    </Pressable>
  );
};

export default memo(MainAction);

const styles = StyleSheet.create({
  container: {
    ...BOX_SHADOW,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  text: {
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 16,
    color: colors.black,
  },
});
