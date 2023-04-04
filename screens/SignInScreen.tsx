import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Image,
  Keyboard,
  Alert,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {useRecoilValue} from 'recoil';
import {apiGetAccessToken} from '../api/main';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import Dimensions from '../constants/Dimensions';
import CustomTextInput from '../components/CustomTextInput';
import {RootStackScreenProps} from '../types';
import FindIdPassword from '../assets/text_images/findIdPassword.svg';
import GoToSignUp from '../assets/text_images/goToSignUp.svg';
import LoginButton from '../assets/text_images/loginButton.svg';
import LongButton from '../components/LongButton';
import KaKao from '../assets/text_images/kakaoLogin.svg';
import Naver from '../assets/text_images/naverLogin.svg';
import Google from '../assets/text_images/googleLogin.svg';
import ID_Main from '../assets/text_images/ID_Main';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useLoginViewModel, login} from '../viewmodels/auth';

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<'SignIn'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isIDFocused, setisIDFocused] = useState(false);
  const [isPWFocused, setisPWFocused] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const passwordField = useRef<TextInput>(null);

  const [loginStatus, setLoginStatus] = useState<number | null>(null);

  const handleLogin = async () => {
    try {
      const result = await login({email: email, password: password});
      // setLoginStatus(result);
    } catch (e) {
      console.log(e);
      setLoginStatus(1);
    }
  };

  useEffect(() => {
    if (loginStatus === 0) {
      navigation.navigate('Root');
    } else if (loginStatus === 1) {
      Alert.alert('에러가 발생했습니다.');
    } else if (loginStatus === 2) {
      Alert.alert('비밀번호가 맞지 않습니다.');
    } else if (loginStatus === 3) {
      Alert.alert('해당하는 계정이 존재하지 않습니다.');
    }
  }, [loginStatus]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
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
              <CustomTextInput
                main={undefined}
                textHolder="아이디 / 이메일을 입력하세요."
                content={email}
                setContent={setEmail}
                returnType="next"
                correctInput={signIn}
                redOrNot={false}
                secure={false}
                ref={passwordField}
              />
              <CustomTextInput
                main={undefined}
                textHolder="비밀번호를 입력하세요"
                content={password}
                setContent={setPassword}
                returnType="done"
                correctInput={signIn}
                redOrNot={true}
                secure={true}
                ref={passwordField}
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
            <LongButton
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
                // if (password === '1234') {
                //   setSignIn(true);
                //   navigation.navigate('Root');
                // } else {
                //   setSignIn(false);
                // }

                // const result = useLoginViewModel({
                //   username: email,
                //   password: password,
                // });
                // if (result == 0) {
                //   navigation.navigate('Root');
                // } else if (result == 1) {
                //   Alert.alert('에러가 발생했습니다.');
                // } else if (result == 2) {
                //   Alert.alert('비밀번호가 맞지 않습니다.');
                // } else if (result == 3) {
                //   Alert.alert('해당하는 계정이 존재하지 않습니다.');
                // }
                handleLogin();
              }}
              width={Dimensions.widthPixel(312)}
              height={Dimensions.widthPixel(48)}
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
            />
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
    //marginTop: Dimensions.heightPixel(162),
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
