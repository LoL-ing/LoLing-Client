import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Dimensions from '../constants/Dimensions';

export default function Textinput(props: {
  Main: JSX.Element;
  Holder: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  onPress: any;
  Red: boolean;
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.TextinputContainer}>
      <View style={styles.MainContainer}>{props.Main}</View>
      <View style={styles.HolderContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={props.Holder}
          placeholderTextColor={Colors.textUnfocusedPurple}
          value={props.content}
          maxLength={200}
          onChangeText={text => {
            props.setContent(text);
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          returnKeyType="send"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextinputContainer: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(68),
    //alignItems: 'center',
    backgroundColor: Colors.textUnfocusedPurple,
  },
  MainContainer: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(16),
    //alignItems: 'center',
  },
  HolderContainer: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(52),
  },
  textInputContainer: {
    width: Layout.Width * 0.68,
    height: Layout.Height * 0.055,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353556',
    borderRadius: 30,
  },
  textInput: {
    height: Layout.Width * 0.11,
    width: Layout.Width * 0.6,
    paddingLeft: Layout.Width * 0.05,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 12,
  },
});
