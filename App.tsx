import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './navigation';
import {RecoilRoot} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
