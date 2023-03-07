import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Dimensions from '../constants/Dimensions';

import Yes from '../assets/icons/svg/yes.svg';
import No from '../assets/icons/svg/no.svg';
import AlertCircle from '../assets/icons/svg/alert-circle.svg';

export default function CheckMessage(props: {
  mainMessage: JSX.Element;
  subMessage: JSX.Element;
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.editContainer}>
      <View
        style={{
          paddingTop: Dimensions.heightPixel(28),
          alignItems: 'center',
        }}>
        <AlertCircle
          width={Dimensions.widthPixel(28)}
          height={Dimensions.heightPixel(28)}
        />
      </View>
      <View
        style={{
          marginVertical: Dimensions.heightPixel(24),
          alignItems: 'center',
          //backgroundColor: 'white',
          height: Dimensions.heightPixel(40),
          justifyContent: 'space-between',
        }}>
        {props.mainMessage}
        {props.subMessage}
      </View>
      <View style={{flexDirection: 'row'}}>
        <No
          width={Dimensions.widthPixel(126)}
          height={Dimensions.heightPixel(32)}
        />
        <Yes
          width={Dimensions.widthPixel(126)}
          height={Dimensions.heightPixel(32)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  editContainer: {
    width: Dimensions.widthPixel(300),
    height: Dimensions.heightPixel(194),
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: '#3D3D5F',
  },
});
