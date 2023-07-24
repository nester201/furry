import React, { memo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StepSVG from '../../../assets/icons/step.svg';

type Props = {
  step: number;
};

const renderResults = () => {
  return <StepSVG width={35} height={35} />;
};

const Steps: React.FC<Props> = ({ step }) => {
  const array = new Array(step);
  return (
    <View style={styles.container}>
      <FlatList data={array} renderItem={renderResults} horizontal contentContainerStyle={styles.listStyle} />
    </View>
  );
};

export default memo(Steps);

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  listStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
