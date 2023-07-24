import React, { memo, useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TEXT } from '@theme/style';
import colors from '@theme/colors';
import { useNavigationApp } from '@hooks/useNavigationApp';

type Props = {
  colorText?: string;
  colorSignIn?: string;
  signIn?: boolean;
};

const SecondaryText: React.FC<Props> = ({ colorText, colorSignIn, signIn }) => {
  const { navigate } = useNavigationApp();

  const textStyle = useMemo(() => [styles.text, colorText ? { color: colorText } : {}], [colorText]);

  const signStyler = useMemo(() => [styles.signIn, colorSignIn ? { color: colorSignIn } : {}], [colorSignIn]);

  const handlePressSign = useCallback(() => {
    if (signIn) {
      navigate('RegisterScreen');
    } else {
      navigate('LoginScreen');
    }
  }, [signIn, navigate]);

  return (
    <Text style={styles.container}>
      <Text style={textStyle}>{signIn ? "Don't have account yet?" : 'Already have an account?'}</Text>
      <TouchableOpacity onPress={handlePressSign}>
        <Text style={signStyler}>{signIn ? 'Sign Up' : 'Sign In'}</Text>
      </TouchableOpacity>
    </Text>
  );
};

export default memo(SecondaryText);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 24,
    alignItems: 'center',
  },
  text: {
    ...TEXT,
    color: colors.white,
  },
  signIn: {
    fontWeight: '700',
    color: colors.white,
    marginLeft: 5,
  },
});
