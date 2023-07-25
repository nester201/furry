import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EnumAsyncStorage, EnumSecureStore } from '@app/interface/IAuth';

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN);
  return accessToken || null;
};

export const deleteTokensStorage = async () => {
  await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN);
};

export const getUserFromStorage = async () => {
  try {
    const user = await AsyncStorage.getItem(EnumAsyncStorage.USER);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  } catch (e) {
    return null;
  }
};

export const saveToStorage = async (data: any) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data?.stsTokenManager.accessToken);
  try {
    await AsyncStorage.setItem(EnumAsyncStorage.USER, JSON.stringify(data.user));
  } catch (e) {
    return null;
  }
};
