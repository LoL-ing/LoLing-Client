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
import HomeIconSelected from '../assets/icons/svg/home-icon-selected.svg';
import HomeIconUnselected from '../assets/icons/svg/home-icon-unselected.svg';

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
    <Stack.Navigator initialRouteName={'Root'}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false, animation: 'fade'}}
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
    </BottomTab.Navigator>
  );
}
