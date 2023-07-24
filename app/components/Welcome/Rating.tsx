import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StepSVG from '../../../assets/icons/step.svg';
import { BOX_SHADOW } from '@theme/style';
import colors from '@theme/colors';

type Props = {
  welcomeScreen?: boolean;
};

const renderResults = () => {
  return <StepSVG width={30} height={30} />;
};

const Rating: React.FC<Props> = ({ welcomeScreen }) => {
  const array = new Array(5);

  return (
    <View style={styles.container}>
      {welcomeScreen && <FlatList data={array} renderItem={renderResults} horizontal />}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    ...BOX_SHADOW,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: 184,
    borderRadius: 18,
  },
});
