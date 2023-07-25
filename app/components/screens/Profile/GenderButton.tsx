import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { BOX_SHADOW, TEXT } from '@theme/style';
import colors from '@theme/colors';
import ManSVG from '../../../../assets/icons/male.svg';
import WomanSVG from '../../../../assets/icons/female.svg';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const GenderButton: React.FC<Props> = ({ value, onChange }) => {
  const styleMale = useMemo(() => (value == 'male' ? styles.active : styles.inactive), [value]);

  const styleFemale = useMemo(() => (value == 'female' ? styles.active : styles.inactive), [value]);

  const textMale = useMemo(() => [styles.text, value == 'male' && { color: colors.white }], [value]);

  const textFemale = useMemo(() => [styles.text, value == 'female' && { color: colors.white }], [value]);

  return (
    <>
      <Text style={styles.placeholder}>Owner</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styleMale} onPress={() => onChange('male')}>
          <ManSVG width={24} height={24} fill={value == 'male' ? colors.white : colors.violet} />
          <Text style={textMale}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleFemale} onPress={() => onChange('female')}>
          <WomanSVG width={24} height={24} fill={value == 'female' ? colors.white : colors.violet} />
          <Text style={textFemale}>Female</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GenderButton;

const wrapper: ViewStyle = {
  width: 158,
  borderRadius: 25,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 10,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  active: {
    ...wrapper,
    ...BOX_SHADOW,
    backgroundColor: colors.violet,
  },
  inactive: {
    ...wrapper,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  text: {
    ...TEXT,
    fontWeight: '600',
  },
  placeholder: {
    fontWeight: '600',
    fontSize: 13,
    color: colors.placeholder,
    marginBottom: 7,
    marginLeft: 5,
  },
});
