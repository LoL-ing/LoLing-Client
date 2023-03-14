import * as React from 'react';
import {useRef, useState} from 'react';
import {
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {useRecoilValue} from 'recoil';
import {accessTokenState} from '../atoms/atom';
import {apiGetAccessToken} from '../api/main';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import Dimensions from '../constants/Dimensions';
import CustomTextInput from '../components/CustomTextInput';
import {RootStackScreenProps} from '../types';
//import { AsyncStorage } from 'react-native';
import FindIdPassword from '../assets/text_images/findIdPassword.svg';
import GoToSignUp from '../assets/text_images/goToSignUp.svg';
import LoginButton from '../assets/text_images/loginButton.svg';
import LongButton from '../components/LongButton';
import KaKao from '../assets/text_images/kakaoLogin.svg';
import Naver from '../assets/text_images/naverLogin.svg';
import Google from '../assets/text_images/googleLogin.svg';
import ID_Main from '../assets/text_images/ID_Main';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<'SignIn'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isIDFocused, setisIDFocused] = useState(false);
  const [isPWFocused, setisPWFocused] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const passwordField = useRef<TextInput>(null);

  // const [token, setToken] = useRecoilState(accessTokenState);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <View style={Styles.fullscreen}> */}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: Dimensions.widthPixel(360),
          height: Dimensions.heightPixel(720),
          backgroundColor: Colors.backgroundBlack,
          paddingTop: 0, //useSafeAreaInsets().top,
          paddingBottom: 0, //useSafeAreaInsets().bottom,
        }}>
        <View style={{backgroundColor: Colors.backgroundBlack}}>
          <View style={styles.signinContainer}>
            <View style={styles.signinTextInputContainer}>
              {/* <TextInput
                style={[
                  styles.textInput,
                  isIDFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput,
                ]}
                placeholder="아이디 / 이메일을 입력하세요"
                placeholderTextColor={
                  isIDFocused ? Colors.textWhite : Colors.textGray
                }
                returnKeyType="next"
                onFocus={() => {
                  setisIDFocused(true);
                }}
                onBlur={() => {
                  setisIDFocused(false);
                }}
                onChangeText={text => setEmail(text)}
                value={email}
                onSubmitEditing={() => passwordField.current?.focus}
                blurOnSubmit={false}
                clearButtonMode="while-editing"
              /> */}
              <CustomTextInput
                Main={undefined}
                Holder="아이디 / 이메일을 입력하세요."
                content={email}
                setContent={setEmail}
                returnType="next"
                Red={signIn}
                referred={undefined}
                onSubmitEditingFunc={() => passwordField.current?.focus}
              />
              <TextInput
                style={[
                  styles.textInput,
                  signIn
                    ? isPWFocused
                      ? styles.focusedTextInput
                      : styles.unfocusedTextInput
                    : styles.signinFailedTextInput,
                ]}
                placeholder="비밀번호를 입력하세요"
                placeholderTextColor={
                  isPWFocused ? Colors.textWhite : Colors.textGray
                }
                secureTextEntry={true}
                onFocus={() => {
                  setisPWFocused(true);
                }}
                onBlur={() => {
                  setisPWFocused(false);
                }}
                onChangeText={text => setPassword(text)}
                value={password}
                ref={passwordField}
                clearButtonMode="while-editing"
              />
            </View>
            <View
              style={[styles.signinFailedContainer, {opacity: signIn ? 0 : 1}]}>
              <Image
                source={require('../assets/images/exclamation-circle.png')}
                style={{
                  width: Dimensions.widthPixel(30),
                  height: Dimensions.widthPixel(30),
                }}
              />
              <Text style={styles.signinFailedText}>
                잘못된 비밀번호입니다. 다시 입력하세요.
              </Text>
            </View>

            <View style={styles.twoButtonContainer}>
              <Pressable
                style={({pressed}) => ({
                  opacity: pressed ? 0.5 : 1,
                  alignItems: 'center',
                })}>
                <FindIdPassword width={Dimensions.widthPixel(114)} />
              </Pressable>
              <Pressable
                style={({pressed}) => ({
                  opacity: pressed ? 0.5 : 1,
                  alignItems: 'center',
                })}
                onPress={() => navigation.navigate('ToS')}>
                <GoToSignUp width={Dimensions.widthPixel(114)} />
              </Pressable>
            </View>
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
                alignItems: 'center',
                marginTop: Dimensions.heightPixel(30),
                marginBottom: Dimensions.heightPixel(43),
              })}
              onPress={() => {
                //   백엔드 없어서 일단 주석처리
                //   onPress={async function () {
                //     const response = await apiGetAccessToken({
                //       email: email,
                //       password: password,
                //     });

                //     if (response.data) {
                //       // setToken(response.data);

                //       /* 로컬 스토리지에 토큰을 저장함 */
                //       await AsyncStorage.setItem('token', response.data);

                //       navigation.navigate('Root');
                //     }
                //   }}
                navigation.navigate('Root');
              }}>
              <LoginButton
                width={Dimensions.widthPixel(312)}
                height={Dimensions.widthPixel(48)}
              />
            </Pressable>
            {/* <LongButton
              onPress={() => {
                navigation.navigate('Root');
              }}
              width={Dimensions.widthPixel(312)}
              height={Dimensions.heightPixel(48)}
              backgroundColor={Colors.backgroundPurple}
              content={
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontWeight: 'bold',
                    fontSize: Dimensions.fontPixel(14),
                  }}>
                  LOG IN
                </Text>
              }
              customStyle={{
                marginTop: Dimensions.heightPixel(30),
                marginBottom: Dimensions.heightPixel(43),
              }}
            /> */}
          </View>

          <Pressable
            style={({pressed}) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
              marginBottom: Dimensions.heightPixel(10),
            })}>
            <KaKao
              width={Dimensions.widthPixel(312)}
              height={Dimensions.widthPixel(48)}
            />
          </Pressable>

          <Pressable
            style={({pressed}) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
              marginBottom: Dimensions.heightPixel(10),
            })}>
            <Naver
              width={Dimensions.widthPixel(312)}
              height={Dimensions.widthPixel(48)}
            />
          </Pressable>

          <Pressable
            style={({pressed}) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}>
            <Google
              width={Dimensions.widthPixel(312)}
              height={Dimensions.widthPixel(48)}
            />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  signinContainer: {
    width: Dimensions.widthPixel(360),
    alignItems: 'center',
    marginTop: Dimensions.heightPixel(162),
    backgroundColor: Colors.backgroundBlack,
  },
  textInput: {
    width: Dimensions.widthPixel(312),
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(14),
    fontWeight: 'bold',
    //padding: Dimensions.fontPixel(15),
  },
  signinTextInputContainer: {
    backgroundColor: Colors.backgroundBlack,
  },
  focusedTextInput: {
    borderBottomColor: Colors.textFocusedPurple,
    borderBottomWidth: 1,
  },
  unfocusedTextInput: {
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 1,
  },
  signinFailedTextInput: {
    borderBottomColor: Colors.textRed,
    borderBottomWidth: 2,
  },
  signinFailedContainer: {
    width: Dimensions.widthPixel(312),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  signinFailedText: {
    color: Colors.textRed,
    fontSize: Dimensions.fontPixel(12),
  },
  twoButtonContainer: {
    width: Dimensions.widthPixel(312),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
