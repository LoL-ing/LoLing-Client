import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import MatchingScreen from '../screens/MatchingScreen';
import CommunityScreen from '../screens/CommunityScreen';
import SocialScreen from '../screens/SocialScreen';
import MoreScreen from '../screens/MoreScreen';
import ChatRoomScreen from '../screens/ChatroomScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ToSScreen from '../screens/ToSScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SelectMyLineChampScreen from '../screens/SelectMyLineChampScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FriendRequestScreen from '../screens/FriendRequestScreen';
import DeleteFriendScreen from '../screens/DeleteFriendScreen';

import HomeIconSelected from '../assets/icons/svg/home-icon-selected.svg';
import HomeIconUnselected from '../assets/icons/svg/home-icon-unselected.svg';
import MatchingIconSelected from '../assets/icons/svg/matching-icon-selected.svg';
import MatchingIconUnselected from '../assets/icons/svg/matching-icon-unselected.svg';
import CommunityIconSelected from '../assets/icons/svg/community-icon-selected.svg';
import CommunityIconUnselected from '../assets/icons/svg/community-icon-unselected.svg';
import SocialIconSelected from '../assets/icons/svg/chatting-icon-selected.svg';
import SocialIconUnselected from '../assets/icons/svg/chatting-icon-unselected.svg';
import SettingsIconSelected from '../assets/icons/svg/setting-icon-selected.svg';
import SettingsIconUnselected from '../assets/icons/svg/setting-icon-unselected.svg';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={'SignIn'}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false, animation: 'fade'}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ToS"
        component={ToSScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{headerShown: false, animation: 'fade'}}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEditScreen}
        options={{headerShown: false, animation: 'fade'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectMyLineChamp"
        component={SelectMyLineChampScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false, animation: 'fade'}}
      />
      <Stack.Screen
        name="FriendRequest"
        component={FriendRequestScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeleteFriend"
        component={DeleteFriendScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.backgroundBlack,
          borderTopWidth: 0,
          height: 49 + useSafeAreaInsets().bottom,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeIconSelected width={30} height={30} />
            ) : (
              <HomeIconUnselected width={30} height={30} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Matching"
        component={MatchingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <MatchingIconSelected width={30} height={30} />
            ) : (
              <MatchingIconUnselected width={30} height={30} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <CommunityIconSelected width={30} height={30} />
            ) : (
              <CommunityIconUnselected width={30} height={30} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Social"
        component={SocialScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <SocialIconSelected width={30} height={30} />
            ) : (
              <SocialIconUnselected width={30} height={30} />
            ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <SettingsIconSelected width={30} height={30} />
            ) : (
              <SettingsIconUnselected width={30} height={30} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
