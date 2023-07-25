import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@hooks/useAuth';
import { TypeRootStackParamList } from './typesNavigation';
import ChooseAuth from '@components/screens/Auth/ChooseAuth';
import WelcomeScreenFirst from '@components/screens/WeclomeScreen/WelcomeScreenFirst';
import WelcomeScreenSecond from '@components/screens/WeclomeScreen/WelcomeScreenSecond';
import WelcomeScreenThird from '@components/screens/WeclomeScreen/WelcomeScreenThird';
import RegisterScreen from '@components/screens/Auth/RegisterScreen';
import LoginScreen from '@components/screens/Auth/LoginScreen';
import BottomNavigation from '@app/navigation/BottomNavigation';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const navigatorOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const Navigation = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        {user ? (
          <>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          </>
        ) : (
          <>
            <Stack.Screen name="WelcomeScreenFirst" component={WelcomeScreenFirst} />
            <Stack.Screen name="WelcomeScreenSecond" component={WelcomeScreenSecond} />
            <Stack.Screen name="WelcomeScreenThird" component={WelcomeScreenThird} />
            <Stack.Screen name="ChooseAuth" component={ChooseAuth} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
