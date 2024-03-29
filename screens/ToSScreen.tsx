import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Shadow} from 'react-native-shadow-2';
import Layout from '../constants/Layout';

import {RootStackScreenProps} from '../types';
import Colors from '../constants/Colors';

import CheckCircleUnchecked from '../assets/icons/svg/circle_check_outline.svg';
import CheckCircleChecked from '../assets/icons/svg/circle_check_outline2.svg';
import ChevronDown from '../assets/icons/svg/chevron_down.svg';
import ChevronUp from '../assets/icons/svg/chevron_up.svg';
import ArrowRight from '../assets/icons/svg/arrow-right.svg';

import AgreeAllOn from '../assets/text_images/agree_on.svg';
import AgreeAllOff from '../assets/text_images/agree_off.svg';
import Hello from '../assets/text_images/Hello!.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ToSScreen({navigation}: RootStackScreenProps<'ToS'>) {
  const [fullconsent, setFullConsent] = useState(false);
  const [essential, setEssential] = useState(false);
  const [optional1, setOptional1] = useState(false);
  const [optional2, setOptional2] = useState(false);
  const [collapsedEssential, setCollapsedEssential] = useState(true);
  const [collapsedOptional1, setCollapsedOptional1] = useState(true);
  const [collapsedOptional2, setCollapsedOptional2] = useState(true);

  const changeFullConsent = () => {
    setFullConsent(!fullconsent);
    setEssential(!fullconsent);
    setOptional1(!fullconsent);
    setOptional2(!fullconsent);
  };

  const changeEssential = () => {
    setEssential(!essential);
    setFullConsent(!essential && optional1 && optional2);
  };

  const changeOptional1 = () => {
    setOptional1(!optional1);
    setFullConsent(essential && !optional1 && optional2);
  };

  const changeOptional2 = () => {
    setOptional2(!optional2);
    setFullConsent(essential && optional1 && !optional2);
  };

  const changeCollapsedEssential = () => {
    setCollapsedEssential(!collapsedEssential);
    if (collapsedEssential) {
      setCollapsedOptional1(true);
      setCollapsedOptional2(true);
    }
  };
  const changeCollapsedOptional1 = () => {
    setCollapsedOptional1(!collapsedOptional1);
    if (collapsedOptional1) {
      setCollapsedEssential(true);
      setCollapsedOptional2(true);
    }
  };
  const changeCollapsedOptional2 = () => {
    setCollapsedOptional2(!collapsedOptional2);
    if (collapsedOptional2) {
      setCollapsedEssential(true);
      setCollapsedOptional1(true);
    }
  };

  return (
    <View
      style={{
        width: Layout.Width,
        height: Layout.Height,
        backgroundColor: Colors.backgroundBlack,
        paddingTop: useSafeAreaInsets().top,
        paddingBottom:
          Layout.AndroidBottomBarHeight + useSafeAreaInsets().bottom,

        paddingHorizontal: Layout.Width * 0.05,
        flexDirection: 'column',
      }}>
      <View style={styles.titleContainer}>
        <Hello />
      </View>

      <View style={styles.fourButtonContainer}>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={() => {
            changeFullConsent();
          }}>
          {fullconsent ? <AgreeAllOn /> : <AgreeAllOff />}
        </Pressable>
        <View style={styles.fullToSContainer}>
          <View style={styles.uncollapsibleContainer}>
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeEssential();
              }}>
              {essential ? <CheckCircleChecked /> : <CheckCircleUnchecked />}
            </Pressable>
            <Text
              style={{
                fontSize: Layout.FontScale * 14,
                color: Colors.textFocusedPurple,
                marginLeft: Layout.Width * 0.05,
              }}>
              [필수]
            </Text>
            <Text style={styles.ToSTitleText}>전자금융거래 이용약관 동의</Text>
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeCollapsedEssential();
              }}>
              {collapsedEssential ? <ChevronDown /> : <ChevronUp />}
            </Pressable>
          </View>
          <Collapsible collapsed={collapsedEssential}>
            <ScrollView style={styles.collapsibleContainer}>
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}>
                {`제1장 총칙

제 1조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.

제 2조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.`}
              </Text>
            </ScrollView>
          </Collapsible>
        </View>
        <View style={styles.fullToSContainer}>
          <View style={styles.uncollapsibleContainer}>
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeOptional1();
              }}>
              {optional1 ? <CheckCircleChecked /> : <CheckCircleUnchecked />}
            </Pressable>
            <Text
              style={{
                fontSize: Layout.FontScale * 14,
                color: Colors.textFocusedPurple,
                marginLeft: Layout.Width * 0.05,
              }}>
              [선택]
            </Text>
            <Text style={styles.ToSTitleText}>전자금융거래 이용약관 동의</Text>
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeCollapsedOptional1();
              }}>
              {collapsedOptional1 ? <ChevronDown /> : <ChevronUp />}
            </Pressable>
          </View>
          <Collapsible collapsed={collapsedOptional1}>
            <ScrollView style={styles.collapsibleContainer}>
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}>
                {`제1장 총칙

제 1조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.

제 2조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.`}
              </Text>
            </ScrollView>
          </Collapsible>
        </View>

        <View style={styles.fullToSContainer}>
          <View style={styles.uncollapsibleContainer}>
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeOptional2();
              }}>
              {optional2 ? <CheckCircleChecked /> : <CheckCircleUnchecked />}
            </Pressable>
            <Text
              style={{
                fontSize: Layout.FontScale * 14,
                color: Colors.textFocusedPurple,
                marginLeft: Layout.Width * 0.05,
              }}>
              [선택]
            </Text>
            <Text style={styles.ToSTitleText}>전자금융거래 이용약관 동의</Text>
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeCollapsedOptional2();
              }}>
              {collapsedOptional2 ? <ChevronDown /> : <ChevronUp />}
            </Pressable>
          </View>
          <Collapsible collapsed={collapsedOptional2}>
            <ScrollView style={styles.collapsibleContainer}>
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}>
                {`제1장 총칙

제 1조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.

제 2조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.`}
              </Text>
            </ScrollView>
          </Collapsible>
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.nextButtonPosition,
          {opacity: pressed ? 0.5 : 1},
        ]}
        onPress={() =>
          essential
            ? navigation.navigate('SignUp')
            : Alert.alert('필수 약관에 동의하셔야합니다')
        }>
        <Shadow
          startColor={Colors.shadowStartColor}
          distance={essential ? 8 : 0}>
          <View
            style={[
              styles.nextButton,
              {
                backgroundColor: essential
                  ? Colors.backgroundPurple
                  : Colors.textUnfocusedPurple,
              },
            ]}>
            <ArrowRight />
          </View>
        </Shadow>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: Layout.Width,
    height: Layout.Height,
    paddingTop: Layout.AndroidStatusBarHeight,
    paddingBottom: Layout.AndroidBottomBarHeight,
    paddingHorizontal: Layout.Width * 0.05,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundBlack,
  },
  titleContainer: {
    marginTop: Layout.Height * 0.07,
    marginBottom: Layout.Height * 0.07,
    marginLeft: Layout.Width * 0.02,
  },
  fourButtonContainer: {
    width: Layout.Width * 0.9,
    marginVertical: Layout.Height * 0.05,
    backgroundColor: Colors.backgroundBlack,
  },
  uncollapsibleContainer: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.07,
    paddingHorizontal: Layout.Width * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
  },
  collapsibleContainer: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.15,
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
    paddingHorizontal: Layout.Width * 0.05,
    marginBottom: Layout.Height * 0.02,
  },
  fullToSContainer: {
    width: Layout.Width * 0.9,
    marginVertical: Layout.Height * 0.015,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
  },
  ToSTitleText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 14,
    marginRight: 50,
  },
  nextButtonPosition: {
    position: 'absolute',
    top: Layout.Height * 0.85,
    right: Layout.Width * 0.07,
  },
  nextButton: {
    width: Layout.Width * 0.17,
    height: Layout.Width * 0.17,
    borderRadius: Layout.Width * 0.17,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
