import * as React from 'react';
import {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

import SearchIcon from '../assets/icons/svg/search-icon.svg';

export default function CheckMessage(props: {
  firstMessage: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.fullContainer}>
      <TextInput
        placeholder={props.firstMessage}
        value={props.content}
        placeholderTextColor={'#484868'}
        onChangeText={text => {
          props.setContent(text);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        returnKeyType="search"
        style={styles.searchBarTextInput}></TextInput>
      <Pressable
        onPress={() => {
          if (props.content === '') Alert.alert('내용을 입력하세요.');
        }}
        style={({pressed}) => ({
          opacity: pressed ? 0.5 : 1,
        })}>
        <SearchIcon
          width={Dimensions.widthPixel(24)}
          height={Dimensions.heightPixel(24)}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    width: Dimensions.widthPixel(312),
    height: Dimensions.heightPixel(40),
    borderRadius: 8,
    backgroundColor: '#1A1A34',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarTextInput: {
    width: Dimensions.widthPixel(270),
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(12),
  },
});
