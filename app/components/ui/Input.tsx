import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TextStyle } from 'react-native';
import { FieldError } from 'react-hook-form';
import colors from '@theme/colors';

interface Props extends TextInputProps {
  error?: FieldError | undefined;
}

const Input: React.FC<Props> = ({ error, style, ...props }) => {
  const textInputStyles = useMemo(() => (error ? [styles.error, style] : [textStyle, style]), [style]);

  return (
    <>
      {error && <Text style={styles.textError}>{error.type}</Text>}
      <TextInput {...props} style={textInputStyles} placeholderTextColor={colors.placeholder} />
    </>
  );
};

export default memo(Input);

const textStyle: TextStyle = {
  backgroundColor: colors.white,
  fontSize: 18,
  borderRadius: 25,
  borderColor: colors.borderColor,
  borderStyle: 'solid',
  borderWidth: 1,
  paddingHorizontal: 20,
  paddingTop: 14,
  paddingBottom: 14,
  color: colors.black,
};

const styles = StyleSheet.create({
  error: {
    ...textStyle,
    borderColor: colors.warning,
  },
  textError: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.warning,
    marginBottom: 4,
  },
});
