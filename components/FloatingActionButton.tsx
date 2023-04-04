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

export default function FloatingActionButton(props: {
  //onPress: (event: GestureResponderEvent) => void;
  onPress: any;
  size: number;
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
          width: props.size,
          height: props.size,
          borderRadius: props.size / 2,
          backgroundColor: props.backgroundColor,
        },
        props.customStyle,
      ]}
      onPress={() => props.onPress}>
      {props.content}
    </Pressable>
  );
}
