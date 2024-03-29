import * as React from 'react';
import {useRef} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import ProfileCard from '../components/ProfileCard';
import getProfileCard from '../data/ProfileCard';
import Arrow from '../assets/icons/svg/arrow-left.svg';
import MatchingLeft from '../assets/icons/svg/matching-left.svg';
import MatchingRight from '../assets/icons/svg/matching-right.svg';
import MatchingHelp from '../assets/icons/svg/matching-help.svg';
import MatchingChatting from '../assets/icons/svg/matching-chatting.svg';
import MatchingOPGG from '../assets/icons/svg/matching-opgg.svg';
import CircularButton from '../components/CircularButton';
import {useNavigation} from '@react-navigation/native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: getProfileCard(),
      firstAnim: new Animated.Value(0),
    };
  }

  _renderItem({item, index}) {
    return (
      <>
        <ProfileCard
          lolingId={item.lolingId}
          mannerTierImg={item.mannerTierImg}
          profileImg={item.championImg}
          rank={item.rank}
          nickname={item.nickname}
          winRate={item.winRate}
          winLose={item.winLose}
          line_info={item.line_info}
          champion_info={item.champion_info}
          description={item.description}
        />
        <CircularButton
          onPress={() => {
            return;
          }}
          bottom={0.15}
          left={0.18}
          svgImage={<MatchingOPGG />}
        />
        <CircularButton
          onPress={() => {
            return;
          }}
          bottom={0.15}
          left={0.39}
          svgImage={<MatchingChatting />}
        />
      </>
    );
  }
  componentDidMount() {
    this._fadeIn();
  }
  componentDidUpdate() {
    this._fadeIn();
  }

  _fadeIn() {
    Animated.timing(this.state.firstAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: 300,
      easing: Easing.out(Easing.quad),
    }).start();
  }

  render() {
    return (
      <View
        style={{
          width: Layout.Width,
          height: Layout.Height,
          backgroundColor: Colors.backgroundBlack,
          // paddingTop: useSafeAreaInsets().top + Layout.Height * 0.02,
          // paddingBottom:
          //   Layout.AndroidBottomBarHeight + 49 + useSafeAreaInsets().bottom,
        }}>
        <Animated.View
          style={[styles.headerContainer, {opacity: this.state.firstAnim}]}>
          <Arrow width={Layout.Width * 0.075} />
          <MatchingHelp width={Layout.Width * 0.075} />
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            opacity: this.state.firstAnim,
            transform: [
              {
                translateY: this.state.firstAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [+Layout.Height * 0.2, 0],
                }),
              },
            ],
          }}>
          <Carousel
            layout={'default'}
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.carouselItems}
            sliderWidth={Layout.Width}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </Animated.View>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            {
              position: 'absolute',
              top: Layout.Height * 0.45,
              zIndex: 100,
              left: Layout.Width * 0.05,
            },
          ]}
          onPress={() => {
            this._carousel.snapToPrev();
          }}>
          <MatchingLeft />
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            {
              position: 'absolute',
              top: Layout.Height * 0.45,
              zIndex: 100,
              right: Layout.Width * 0.04,
            },
          ]}
          onPress={() => {
            this._carousel.snapToNext();
          }}>
          <MatchingRight />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginVertical: Layout.Height * 0.01,
    marginHorizontal: Layout.Width * 0.05,
    justifyContent: 'space-between',
  },
});
