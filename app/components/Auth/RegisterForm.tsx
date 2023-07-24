import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { BOX_SHADOW } from '@theme/style';
import colors from '@theme/colors';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IData } from '@app/interface/IData';
import Input from '@ui/Input';
import MainButton from '@ui/MainButton';
import { useAuth } from '@hooks/useAuth';

type Props = {
  isReg?: boolean;
};

const RegisterForm: React.FC<Props> = ({ isReg }) => {
  const { isLoading, login, register } = useAuth();
  const { control, handleSubmit, ...fetchMore } = useForm<IData>();
  const [isCheck, setIsCheck] = useState(false);

  const onSubmit: SubmitHandler<IData> = useCallback(
    async data => {
      try {
        if (isReg) {
          console.log(data);
          await register(data.displayName, data.email, data.password);
        } else {
          await login(data.email, data.password);
        }
      } catch (e) {
        console.log(e);
      }
    },
    [isReg, register, login]
  );

  return (
    <View style={[styles.container, !isReg && { transform: [{ translateX: 50 }, { translateY: 200 }] }]}>
      <FormProvider control={control} handleSubmit={handleSubmit} {...fetchMore}>
        <View style={styles.wrapper}>
          {isReg && (
            <Controller
              control={control}
              name={'displayName'}
              rules={{ required: true }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  error={error}
                  style={styles.fieldStyle}
                  placeholder={'Full name'}
                />
              )}
            />
          )}
          <Controller
            control={control}
            name={'email'}
            defaultValue={''}
            rules={{ required: true }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                error={error}
                style={styles.fieldStyle}
                placeholder={'Email'}
              />
            )}
          />
          <Controller
            control={control}
            name={'password'}
            defaultValue={''}
            rules={{ required: true }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                error={error}
                style={styles.fieldStyle}
                placeholder={'Password'}
                secureTextEntry={true}
              />
            )}
          />
          {isReg && (
            <View style={styles.rulesWrapper}>
              <Checkbox value={isCheck} onValueChange={setIsCheck} color={colors.violet} style={styles.checkboxStyle} />
              <Text>I agree with the rules</Text>
            </View>
          )}
          <MainButton
            title={isReg ? 'Sign Up' : 'Sign In'}
            onPress={handleSubmit(onSubmit)}
            style={{ marginTop: 30 }}
            disable={isReg ? !isCheck : false}
            loading={isLoading}
          />
        </View>
      </FormProvider>
    </View>
  );
};

export default memo(RegisterForm);

const styles = StyleSheet.create({
  container: {
    ...BOX_SHADOW,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    transform: [{ translateX: 50 }, { translateY: 150 }],
    backgroundColor: colors.white,
    maxWidth: 340,
    borderRadius: 16,
    zIndex: 1,
  },
  fieldStyle: {
    marginBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  rulesWrapper: {
    marginTop: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    gap: 14,
  },
  checkboxStyle: {
    width: 18,
    height: 18,
    borderRadius: 7.5,
    borderWidth: 1,
  },
});
