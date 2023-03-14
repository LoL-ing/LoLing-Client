import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageSourcePropType,
  ReturnKeyTypeOptions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Dimensions from '../constants/Dimensions';

export default function CustomTextInput(props: {
  Main: JSX.Element | undefined;
  Holder: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  Red: boolean;
  returnType: ReturnKeyTypeOptions | undefined;
  referred: React.RefObject<TextInput> | undefined;
  //onSubmitEditingFunc: () => void| undefined;
  //onSubmitEditingFunc: (NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void | undefined;
  onSubmitEditingFunc: any | undefined;
}) {
  //const navigation = useNavigation();
  const [focused, setFocused] = React.useState(false);
  return (
    <View style={styles.OuterContainer}>
      <View
        style={props.Main !== undefined ? styles.MainContainer : {height: 0}}>
        {props.Main}
      </View>
      <View
        style={[
          styles.HolderContainer,
          {
            borderBottomColor: focused
              ? Colors.textFocusedPurple
              : Colors.textUnfocusedPurple,
          },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder={props.Holder}
          placeholderTextColor={
            focused === false ? Colors.textUnfocusedPurple : Colors.textWhite
          }
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
          clearButtonMode="while-editing"
          returnKeyType={props.returnType}
          onSubmitEditing={props.onSubmitEditingFunc}
          ref={props.referred}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OuterContainer: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(68),
  },
  MainContainer: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(16),
  },
  HolderContainer: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(52),
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 2,
  },
  textInput: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(52),
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(12),
  },
});
