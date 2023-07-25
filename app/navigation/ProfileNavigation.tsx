import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from '@app/navigation/typesNavigation';
import ProfileScreen from '@components/screens/Profile/ProfileScreen';
import EditProfileScreen from '@components/screens/Profile/EditProfileScreen';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const navigatorOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const ProfileNavigation = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
