import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TEXT, TEXT_H2 } from '@theme/style';

type Props = {
  title: string;
  subtitle: string;
};

const WelcomeText: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={TEXT_H2}>{title}</Text>
      <Text style={TEXT}>{subtitle}</Text>
    </View>
  );
};

export default memo(WelcomeText);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    gap: 15,
  },
});
