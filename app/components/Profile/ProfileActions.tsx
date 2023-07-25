import React, { memo, ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ArrowSVG from '../../../assets/icons/profileActions/arrow.svg';
import colors from '@theme/colors';
import { BOX_SHADOW, TEXT } from '@theme/style';

type Props = {
  onPress?: () => void;
  title: string;
  children: ReactNode;
};

const ProfileActions: React.FC<Props> = ({ onPress, title, children }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <View style={styles.iconWrapper}>{children}</View>
      </View>
      <View style={styles.wrapper}>
        <Text style={TEXT}>{title}</Text>
        <ArrowSVG width={20} height={20} fill={colors.placeholder} style={{ transform: [{ rotate: '180deg' }] }} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProfileActions);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16,
  },
  iconWrapper: {
    ...BOX_SHADOW,
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 20,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryColor,
  },
});
