import * as React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  getFriendsSelector,
  getLoLAccountSelector,
  getMyProfileSelector,
} from '../atoms/selector';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Dimensions from '../constants/Dimensions';
import HomeScreenFriendList from '../components/HomeScreenFriendList';
import CheckMessage from '../components/CheckMessage';
// import getMyProfile from '../data/MyProfile';
// import getFriends from '../data/Friends';
import {RootTabScreenProps} from '../types';
// import {accessTokenState} from '../atoms/atom';
//import jwt_decode from 'jwt-decode';
import Chevron_Right from '../assets/icons/svg/fi_chevron-right.svg';
import Matching_User from '../assets/text_images/matching-user.svg';
import Friend_List from '../assets/text_images/friend-list.svg';
import Ontime_Hot_Post from '../assets/text_images/ontime-hot-post.svg';
import Not_Restorable from '../assets/text_images/notRestorable.svg';
import Friend_EditLine from '../assets/text_images/friendEditLine.svg';

//const MyProfile = getMyProfile();
//const friends = getFriends();
//const MatchableUsers = getFriends();
export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
  const MyProfile = useRecoilValue(getMyProfileSelector)[0];
  const friends = useRecoilValue(getFriendsSelector);
  const MatchableUsers = useRecoilValue(getLoLAccountSelector);

  //  여기에서 토큰 -> lol_name 추출 해서 넣기
  // const myJWT = useRecoilValue(accessTokenState);

  // console.log(myJWT);

  //const payload = jwt.decode(String(myJWT).split('.')[1]);
  //console.log(jwt_decode(String(myJWT).split('.')[1]));
  return (
    <View
      style={{
        width: Dimensions.widthPixel(360),
        height: Dimensions.heightPixel(720) - 49,
        backgroundColor: Colors.backgroundBlack,
        //paddingTop: useSafeAreaInsets().top,
        // paddingBottom:
        //   Layout.AndroidBottomBarHeight + 49 + useSafeAreaInsets().bottom,
      }}>
      <CheckMessage
        mainMessage={
          <Friend_EditLine
            width={Dimensions.widthPixel(211)}
            height={Dimensions.heightPixel(16)}
          />
        }
        subMessage={
          <Not_Restorable
            width={Dimensions.widthPixel(121)}
            height={Dimensions.heightPixel(12)}
          />
        }
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <View style={styles.profileSummaryContainer}>
            <Image style={styles.profileImg} source={MyProfile?.profileImg} />
            <View
              style={{
                height: Dimensions.widthPixel(65), //profileImg 크기에 맞춤
                justifyContent: 'space-between',
              }}>
              <Text style={styles.profileNicknameText}>
                {MyProfile?.nickname}
              </Text>
              <Text style={styles.profileTierText}>{MyProfile?.tier}</Text>
              <View
                style={{
                  width: Dimensions.widthPixel(120),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.profileInfoText}>
                  승률 {MyProfile?.winrate}
                </Text>
                <Text style={styles.profileInfoText}>KDA {MyProfile?.KDA}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                //width: Layout.Width * 0.48,
                paddingTop: Dimensions.heightPixel(15),
                paddingBottom: Dimensions.heightPixel(24),
                marginLeft: Dimensions.widthPixel(18),
              }}>
              <Text style={styles.profileSubtitleText}>CHAMPION</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.winRateAndKDAContainer}>
                  <Image
                    style={styles.championImg}
                    source={require('../assets/images/Teemo.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Dimensions.heightPixel(9),
                    }}>
                    <Text style={styles.profileWinRateText}>
                      {MyProfile?.champ1Winrate}
                    </Text>
                    <Text style={styles.profileKDAText}>
                      / {MyProfile?.champ1KDA}
                    </Text>
                  </View>
                </View>
                <View style={styles.winRateAndKDAContainer}>
                  <Image
                    style={styles.championImg}
                    source={require('../assets/images/Irelia.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Dimensions.heightPixel(9),
                    }}>
                    <Text style={styles.profileWinRateText}>
                      {MyProfile?.champ2Winrate}
                    </Text>
                    <Text style={styles.profileKDAText}>
                      / {MyProfile?.champ2KDA}
                    </Text>
                  </View>
                </View>
                <View style={styles.winRateAndKDAContainer}>
                  <Image
                    style={styles.championImg}
                    source={require('../assets/images/Nunu.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Dimensions.heightPixel(9),
                    }}>
                    <Text style={styles.profileWinRateText}>
                      {MyProfile?.champ3Winrate}
                    </Text>
                    <Text style={styles.profileKDAText}>
                      / {MyProfile?.champ3KDA}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                paddingTop: Dimensions.heightPixel(15),
                paddingBottom: Dimensions.heightPixel(24),
                marginRight: Dimensions.widthPixel(18),
              }}>
              <Text style={styles.profileSubtitleText}>POSITION</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.winRateAndKDAContainer}>
                  <Image
                    style={styles.positionImg}
                    source={require('../assets/images/lineTop.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Dimensions.heightPixel(9),
                    }}>
                    <Text style={styles.profileWinRateText}>
                      {MyProfile?.line1Winrate}
                    </Text>
                    <Text style={styles.profileKDAText}>
                      / {MyProfile?.line1KDA}
                    </Text>
                  </View>
                </View>
                <View style={[styles.winRateAndKDAContainer, {marginRight: 0}]}>
                  <Image
                    style={styles.positionImg}
                    source={require('../assets/images/lineJungle.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Dimensions.heightPixel(9),
                    }}>
                    <Text style={styles.profileWinRateText}>
                      {MyProfile?.line2Winrate}
                    </Text>
                    <Text style={styles.profileKDAText}>
                      / {MyProfile?.line2KDA}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.listContainer]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Dimensions.heightPixel(34),
              marginBottom: Dimensions.heightPixel(22),
            }}>
            <Matching_User
              width={Dimensions.widthPixel(81)}
              height={Dimensions.widthPixel(12)}
            />
            <Pressable>
              <Chevron_Right />
            </Pressable>
          </View>
          <FlatList
            data={MatchableUsers}
            renderItem={({item}) => (
              <View style={styles.matchingContainer}>
                <View style={styles.userInfoContainer}>
                  <Text
                    style={styles.userText}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}>
                    {item.lol_name}
                  </Text>
                  <Text style={styles.rankText}>{item.tier}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: 10,
                  }}>
                  <View style={styles.matchingInfoContainer}>
                    <Image
                      style={styles.championImg}
                      source={require('../assets/images/Teemo.png')}></Image>
                    <View style={{marginLeft: 10}}>
                      <Text style={styles.winRateText}>
                        {item.mostChampWinRate}
                      </Text>
                      <Text style={styles.KDAText}>{item.mostChampKDA}</Text>
                    </View>
                  </View>

                  <View style={styles.matchingInfoContainer}>
                    <Image
                      style={styles.championImg}
                      source={require('../assets/images/Teemo.png')}></Image>
                    <View style={{marginLeft: 10}}>
                      <Text style={styles.winRateText}>
                        {item.mostLineWinRate}
                      </Text>
                      <Text style={styles.KDAText}>{item.mostLineKDA}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.listContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: Dimensions.heightPixel(30),
            }}>
            <Friend_List
              width={Dimensions.widthPixel(45)}
              height={Dimensions.widthPixel(12)}
            />
            <Pressable onPress={() => navigation.navigate('Social')}>
              <Chevron_Right />
            </Pressable>
          </View>
          <FlatList
            data={friends}
            renderItem={({item}) => (
              <HomeScreenFriendList
                nickname={item.nickname}
                profileImg={item.profileImg}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={[styles.listContainer]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: Dimensions.heightPixel(21),
            }}>
            <Ontime_Hot_Post
              width={Dimensions.widthPixel(88)}
              height={Dimensions.widthPixel(12)}
            />
            <Pressable>
              <Chevron_Right />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
  },
  //profile ----------------------------------------
  profileContainer: {
    marginTop: Dimensions.heightPixel(25),
    width: Dimensions.widthPixel(312),
    //height: Dimensions.heightPixel(213),
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 10,
    elevation: 6,
  },
  profileSummaryContainer: {
    width: Dimensions.widthPixel(312),
    //height: Dimensions.heightPixel(112),
    paddingTop: Dimensions.heightPixel(20),
    paddingBottom: Dimensions.heightPixel(26),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 10,
    elevation: 6,
  },
  profileImg: {
    marginLeft: Dimensions.widthPixel(20),
    marginRight: Dimensions.widthPixel(25),
    width: Dimensions.widthPixel(65),
    height: Dimensions.heightPixel(65),
    borderRadius: Layout.Width * 0.1,
  },
  profileNicknameText: {
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(18),
    fontWeight: 'bold',
  },
  profileTierText: {
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(14),
  },
  profileInfoText: {
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(12),
    opacity: 0.7,
  },
  profileSubtitleText: {
    color: Colors.textGray,
    fontSize: Dimensions.fontPixel(6),
    marginBottom: Dimensions.heightPixel(6),
  },
  profileWinRateText: {
    color: Colors.textFocusedPurple,
    fontSize: Dimensions.fontPixel(9),
  },
  profileKDAText: {
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(9),
  },
  winRateAndKDAContainer: {
    width: Dimensions.widthPixel(43),
    marginRight: Dimensions.widthPixel(10),
    alignItems: 'center',
  },
  //matching----------------------------------------
  matchingContainer: {
    width: Dimensions.widthPixel(180),
    height: Dimensions.widthPixel(94),
    marginRight: Dimensions.widthPixel(15),
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
  },
  userInfoContainer: {
    width: Dimensions.widthPixel(165),
    height: Dimensions.heightPixel(28),
    marginVertical: Dimensions.heightPixel(10),
    paddingHorizontal: Dimensions.widthPixel(8),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 30,
  },

  listContainer: {
    width: Dimensions.widthPixel(324),
    marginVertical: Dimensions.heightPixel(5),
    backgroundColor: Colors.backgroundBlack,
  },

  matchingInfoContainer: {
    paddingVertical: Dimensions.heightPixel(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  championImg: {
    width: Dimensions.widthPixel(34),
    height: Dimensions.heightPixel(34),
    borderRadius: 50,
  },
  winRateText: {
    color: Colors.textFocusedPurple,
    fontSize: Dimensions.fontPixel(12),
  },
  KDAText: {
    color: Colors.textGray,
    fontSize: Dimensions.fontPixel(12),
  },
  positionImg: {
    width: Dimensions.widthPixel(36),
    height: Dimensions.heightPixel(34),
  },
  userText: {
    width: Dimensions.widthPixel(74),
    height: Dimensions.heightPixel(15),
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(10),
    fontWeight: 'bold',
  },
  rankText: {
    color: Colors.textWhite,
    fontSize: Dimensions.fontPixel(12),
    fontWeight: 'bold',
  },
});
