import React, { memo, useCallback, useMemo } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import colors from '@theme/colors';
import { useNavigationApp } from '@hooks/useNavigationApp';

type Props = {
  firstScreen?: boolean;
  styleContainer?: ViewStyle;
  styleText?: TextStyle;
};

const SignInButton: React.FC<Props> = ({ firstScreen, styleText, styleContainer }) => {
  const { navigate } = useNavigationApp();

  const containerMainStyle = useMemo(() => [styles.container, styleContainer && styleContainer], [styleContainer]);

  const textStyles = useMemo(
    () => [firstScreen ? styles.firstScreenText : styles.text, styleText && styleText],
    [firstScreen, styleText]
  );

  const handlePressSignIn = useCallback(() => {
    navigate('LoginScreen');
  }, [navigate]);

  return (
    <TouchableOpacity style={containerMainStyle} onPress={handlePressSignIn}>
      <Text style={textStyles}>Sign In</Text>
    </TouchableOpacity>
  );
};

export default memo(SignInButton);

const textStyle: TextStyle = {
  fontWeight: '600',
  fontSize: 13,
  lineHeight: 19,
};

const styles = StyleSheet.create({
  container: {
    width: 58,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstScreenText: {
    ...textStyle,
    color: colors.black,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
  },
  text: {
    ...textStyle,
    color: colors.violet,
  },
});
