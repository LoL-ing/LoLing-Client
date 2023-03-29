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

function CustomTextInput(
  props: {
    main: JSX.Element | undefined;
    textHolder: string;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    redOrNot: boolean;
    //customTextInput에 적힌 것을 보고 형식 등에 맞는지 확인 등을
    //하는 작업을 포함하여 틀렸을시 빨간색을 띄워야하는 textinput이면 true
    correctInput: boolean;
    //해당값이 false가 되면 밑줄이 빨간색으로 변함.
    //redOrNot이 false인 textinput에 한해서는 항상 true값을 줌.
    returnType: ReturnKeyTypeOptions | undefined;
    //referred: React.RefObject<TextInput> | undefined;
    //onSubmitEditingFunc: () => void| undefined;
    //onSubmitEditingFunc: (NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void | undefined;
    //onSubmitEditingFunc: any | undefined;
    secure: boolean;
  },
  ref: any,
) {
  //const navigation = useNavigation();
  const [focused, setFocused] = React.useState(false);
  //console.log(ref);
  //const input = React.forwardRef<TextInput>;
  //console.log(props.onSubmitEditingFunc);
  return (
    <View style={styles.OuterContainer}>
      <View
        style={props.main !== undefined ? styles.MainContainer : {height: 0}}>
        {props.main}
      </View>
      <View
        style={[
          styles.HolderContainer,
          {
            borderBottomColor: focused
              ? Colors.textFocusedPurple
              : props.correctInput
              ? Colors.textUnfocusedPurple
              : props.redOrNot
              ? Colors.textRed
              : undefined,
          },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder={props.textHolder}
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
          onSubmitEditing={
            props.returnType === 'next' ? () => ref.current?.focus() : undefined
          }
          ref={props.returnType === 'next' ? undefined : ref}
          //ref를 다음 textinput칸을 부를때와 불러지는 textinput칸에 동일한 것을
          //사용하기 때문에 returntype이 'next'이면 자기자신 참조를 막기위해 undefiend
          //사용방법: refer할때와 referred되는 textinput말고는 ref를 넘겨줄때 undefiend를 사용할 것.
          secureTextEntry={props.secure}
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

export default React.forwardRef(CustomTextInput);
