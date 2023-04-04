import * as React from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Platform,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import MatchingPosition from '../assets/text_images/matching-position.svg';
import MatchingChampion from '../assets/text_images/matching-champion.svg';
import MatchingToUser from '../assets/text_images/matching-toUser.svg';
import LineProfileData from './LineProfileData';
import ChampionProfileData from './ChampionProfileData';

export default function ProfileCard(props: {
  lolingId: string;
  //mannerTierImg: string;
  //profileImg: string;
  profileImg: any;
  mannerTierImg: any;
  rank: string;
  nickname: string;
  winRate: string;
  winLose: string;
  line_info: Array<object>;
  // championImg_1: string;
  // championImg_2: string;
  // championImg_3: string;
  // champ_winRate_1: string;
  // champ_winRate_2: string;
  // champ_winRate_3: string;
  // champ_kda_1: string;
  // champ_kda_2: string;
  // champ_kda_3: string;
  champion_info: Array<object>;
  description: string;
}) {
  return (
    <View>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderlolingId}>{props.lolingId}</Text>
        <View style={styles.cardHeaderManner}>
          <Text
            style={{fontSize: Layout.FontScale * 10, color: Colors.textWhite}}>
            매너티어
          </Text>
          <Image
            //source={{uri: props.mannerTierImg}}
            source={props.mannerTierImg}
            style={{
              width: Layout.Width * 0.07,
              height: Layout.Width * 0.07,
            }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Image
            //source={{uri: props.profileImg}}
            source={props.profileImg}
            style={styles.profileImg}
          />
          <Text style={styles.profileRankText}>{props.rank}</Text>
          <Text style={styles.profileNickname}>{props.nickname}</Text>
          <Text style={styles.profileWinRate}>
            {props.winRate + '    ' + props.winLose}
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.positionChampionContainer}>
            <MatchingPosition width={Layout.Width * 0.15} />
            <LineProfileData lineInfo={props.line_info} />
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.positionChampionContainer}>
            <MatchingChampion width={Layout.Width * 0.18} />
            <ChampionProfileData championInfo={props.champion_info} />
          </View>
        </View>

        <View
          style={{
            height: Layout.Height * 0.08,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: Layout.Height * 0.03,
          }}>
          <MatchingToUser width={Layout.Width * 0.25} />
          <View
            style={{
              height: Layout.Height * 0.05,
              width: Layout.Width * 0.6,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.quotText}>&ldquo;</Text>
            <Text style={styles.descText}>{' ' + props.description + ' '}</Text>
            <Text style={styles.quotText}>&rdquo;</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: Layout.Width * 0.2,
    height: Layout.Width * 0.2,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.backgroundPurple,
  },
  textWinRate: {
    color: Colors.backgroundPurple,
    fontSize: Layout.FontScale * 9,
  },
  textWinLose: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 9,
  },
  smallImage: {
    width: Layout.Width * 0.1,
    height: Layout.Width * 0.1,
    margin: Layout.Width * 0.02,
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: Layout.Height * 0.02,
    marginHorizontal: Layout.Width * 0.05,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: Colors.backgroundNavy,
    height: Layout.Height * 0.75,
    width: Layout.Width * 0.75,
    borderRadius: Layout.Width * 0.05,
    top: Platform.OS === 'ios' ? 0 : Layout.Height * 0.02,
    position: 'absolute',
  },
  cardHeader: {
    backgroundColor: Colors.backgroundPurple,
    height: Layout.Height * 0.076,
    width: Layout.Width * 0.75,
    borderRadius: Layout.Width * 0.05,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 0 : Layout.Height * 0.02,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.Width * 0.05,
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: Layout.Height * 0.12,
    flexDirection: 'column',
    alignItems: 'center',
  },
  quotText: {
    color: Colors.textFocusedPurple,
    fontSize: Layout.FontScale * 20,
  },
  descText: {
    width: Layout.Width * 0.55,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 10,
    textAlign: 'center',
  },
  positionChampionContainer: {
    height: Layout.Height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Layout.Height * 0.03,
  },
  profileRankText: {
    color: Colors.backgroundPurple,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 14,
    marginVertical: Layout.Height * 0.005,
  },
  profileNickname: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 16,
    marginVertical: Layout.Height * 0.005,
  },
  profileWinRate: {
    color: Colors.textGray,
    fontSize: Layout.FontScale * 12,
    marginVertical: Layout.Height * 0.005,
  },
  cardHeaderlolingId: {
    fontSize: Layout.FontScale * 18,
    color: Colors.textWhite,
    fontWeight: 'bold',
  },
  cardHeaderManner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Layout.Width * 0.2,
  },
});
