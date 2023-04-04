import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {GestureResponderEvent} from 'react-native';

export default function LongButton(props: {
  onPress: (event: GestureResponderEvent) => void;
  width: number;
  height: number;
  backgroundColor: string;
  content: JSX.Element;
  customStyle: StyleProp<ViewStyle>;
}) {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: props.width,
          height: props.height,
          borderRadius: 100,
          backgroundColor: props.backgroundColor,
        },
        props.customStyle,
      ]}
      onPress={props.onPress}>
      {props.content}
    </Pressable>
  );
}
