import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from '@app/navigation/typesNavigation';
import ProfileScreen from '@components/screens/Profile/ProfileScreen';
import EditProfileScreen from '@components/screens/Profile/EditProfileScreen';
import MyPetsScreen from '@components/screens/Profile/MyPetsScreen';
import EditPetScreen from '@components/screens/Profile/EditPetScreen';
import AddPetsScreen from '@components/screens/Profile/AddPetsScreen';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const navigatorOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const ProfileNavigation = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="MyPetScreen" component={MyPetsScreen} />
      <Stack.Screen name="EditPetScreen" component={EditPetScreen} />
      <Stack.Screen name="AddPetScreen" component={AddPetsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
