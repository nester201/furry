import React, { memo, ReactNode, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

type Props = {
  children: ReactNode;
  isScrollView?: boolean;
  backgroundColor?: string;
};

const Layout: React.FC<Props> = ({ children, isScrollView = false, backgroundColor }) => {
  const containerStyle = useMemo(
    () => [styles.container, backgroundColor ? { backgroundColor: backgroundColor } : {}],
    [backgroundColor]
  );

  return <View style={containerStyle}>{isScrollView ? <ScrollView>{children}</ScrollView> : children}</View>;
};

export default memo(Layout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
