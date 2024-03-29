import * as React from 'react';
import {Pressable, StyleSheet, Text, View, FlatList} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import FriendRequest from '../components/FriendRequest';
import {RootStackScreenProps} from '../types';

import Arrow from '../assets/icons/svg/arrow-left.svg';
import OverflowMenu from '../assets/icons/svg/overflow-menu.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const data = {
  request: [
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '하아아아푸움',
      isFriendrequest: true,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '겨드랑이에낀손',
      isFriendrequest: false,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },

    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },

    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },
  ],
};

export default function FriendRequestScreen({
  navigation,
}: RootStackScreenProps<'FriendRequest'>) {
  return (
    <View
      style={{
        width: Layout.Width,
        height: Layout.Height,
        backgroundColor: Colors.backgroundBlack,
        paddingTop: useSafeAreaInsets().top,
        paddingBottom:
          Layout.AndroidBottomBarHeight + useSafeAreaInsets().bottom,
      }}>
      <View style={styles.header}>
        <Pressable
          style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}
          onPress={() => {
            navigation.navigate('Social');
          }}>
          <Arrow width={Layout.Width * 0.075} />
        </Pressable>
        <Text style={styles.roomTitle}>친구/매칭 요청</Text>
        <Pressable
          style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}
          onPress={() => {}}>
          <OverflowMenu width={Layout.Width * 0.075} />
        </Pressable>
      </View>

      <FlatList
        data={data.request}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <FriendRequest
              proflieImg={item.proflieImg}
              nickname={item.nickname}
              isFriendrequest={item.isFriendrequest}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenView: {
    width: Layout.Width,
    height: Layout.Height,
    paddingTop: Layout.AndroidStatusBarHeight,
    paddingBottom: Layout.AndroidBottomBarHeight,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  header: {
    width: Layout.Width,
    height: Layout.Height * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Layout.Width * 0.028,
    backgroundColor: Colors.backgroundBlack,
  },
  roomTitle: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 14,
    textAlign: 'center',
  },
});
