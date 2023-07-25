import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@theme/colors';
import SearchSVG from '../../assets/icons/lupa.svg';
import HistorySVG from '../../assets/icons/clock.svg';
import ExploreSVG from '../../assets/icons/explore.svg';
import ProfileSVG from '../../assets/icons/profile.svg';
import Home from '@components/screens/Home';
import Appointments from '@components/screens/Appointments';
import ExploreScreen from '@components/screens/ExploreScreen';
import ProfileNavigation from '@app/navigation/ProfileNavigation';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.activeTab,
  tabBarInactiveTintColor: colors.inactiveTab,
};

interface ITabBarIcon {
  focused: boolean;
  color: string;
  size: number;
}

const SearchIcon: React.FC<ITabBarIcon> = ({ color }) => <SearchSVG width={40} height={40} fill={color} />;
const HistoryIcon: React.FC<ITabBarIcon> = ({ color }) => <HistorySVG width={40} height={40} fill={color} />;
const ExploreIcon: React.FC<ITabBarIcon> = ({ color }) => <ExploreSVG width={40} height={40} fill={color} />;
const ProfileIcon: React.FC<ITabBarIcon> = ({ color }) => <ProfileSVG width={40} height={40} fill={color} />;

const homeOptions: BottomTabNavigationOptions = {
  tabBarIcon: SearchIcon,
  tabBarLabel: 'Search',
  tabBarShowLabel: true,
};

const appointmentsOptions: BottomTabNavigationOptions = {
  tabBarIcon: HistoryIcon,
};

const exploreOptions: BottomTabNavigationOptions = {
  tabBarIcon: ExploreIcon,
};

const profileOptions: BottomTabNavigationOptions = {
  tabBarIcon: ProfileIcon,
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="BottomNavigation" screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} options={homeOptions} />
      <Tab.Screen name="Appointments" component={Appointments} options={appointmentsOptions} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={exploreOptions} />
      <Tab.Screen name="Profile" component={ProfileNavigation} options={profileOptions} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
