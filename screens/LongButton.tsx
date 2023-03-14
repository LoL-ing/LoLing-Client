import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';

export default function CheckMessage(props: {
  mainMessage: JSX.Element;
  subMessage: JSX.Element;
  onPress: any;
}) {
  return (
    <Pressable
      style={({pressed}) => ({
        opacity: pressed ? 0.5 : 1,
        alignItems: 'center',
      })}
      onPress={() => navigation.navigate('ToS')}>
      <GoToSignUp width={Dimensions.widthPixel(114)} />
    </Pressable>
  );
}
