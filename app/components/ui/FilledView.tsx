import React, { memo, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: ReactNode;
};

const FilledView: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default memo(FilledView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
