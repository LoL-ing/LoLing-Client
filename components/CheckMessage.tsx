import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Dimensions from '../constants/Dimensions';

import Yes from '../assets/icons/svg/yes.svg';
import No from '../assets/icons/svg/no.svg';
import AlertCircle from '../assets/icons/svg/alert-circle.svg';

export default function CheckMessage(props: {
  mainMessage: JSX.Element;
  subMessage: JSX.Element;
  onPress: any;
}) {
  return (
    <View style={styles.editContainer}>
      <View style={styles.alertcircleContainer}>
        <AlertCircle
          width={Dimensions.widthPixel(28)}
          height={Dimensions.heightPixel(28)}
          style={{color: 'gray'}}
        />
      </View>
      <View style={styles.messageComtainer}>
        {props.mainMessage}
        {props.subMessage}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Pressable
          onPress={props.onPress}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <No
            width={Dimensions.widthPixel(126)}
            height={Dimensions.heightPixel(32)}
          />
        </Pressable>
        <Pressable
          onPress={props.onPress}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <Yes
            width={Dimensions.widthPixel(126)}
            height={Dimensions.heightPixel(32)}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  editContainer: {
    width: Dimensions.widthPixel(300),
    height: Dimensions.heightPixel(194),
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#3D3D5F',
  },
  alertcircleContainer: {
    paddingTop: Dimensions.heightPixel(28),
    alignItems: 'center',
  },
  messageComtainer: {
    marginVertical: Dimensions.heightPixel(24),
    alignItems: 'center',
    height: Dimensions.heightPixel(40),
    justifyContent: 'space-between',
  },
});
