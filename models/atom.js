import {atom} from 'recoil';

export const friendsState = atom({
  key: 'friendsState',
  default: [
    {
      nickname: '하아아아푸움',
      profileImg: require('../assets/images/Irelia.png'),
      tier: 'Iron 4',
      line: 'top',
      lolingId: 'Soodoll',
      mannerTierImg: require('../assets/images/diamond.png'),
      championImg: require('../assets/images/Galio.png'),
      rank: 'Gold 3',
      winRate: '승률 59%',
      winLose: '74승 52패',
      // lineImg_1: require('../assets/images/Galio.png'),
      // lineImg_2: require('../assets/images/Galio.png'),
      // line_winRate_1: '88%',
      // line_winRate_2: '88%',
      // line_kda_1: '3.87',
      // line_kda_2: '3.87',
      line_info: [
        {
          LINE_KDA: 2.75,
          LINE_NAME: 'JUNGLE',
          LINE_COUNT: 34,
          QUEUE_TYPE: '420',
          LINE_WIN_RATE: '58.8%',
        },
        {
          LINE_KDA: 2.27,
          LINE_NAME: 'BOTTOM',
          LINE_COUNT: 19,
          QUEUE_TYPE: '420',
          LINE_WIN_RATE: '42.1%',
        },
      ],
      // championImg_1: require('../assets/images/Graves.png'),
      // championImg_2: require('../assets/images/Galio.png'),
      // championImg_3: require('../assets/images/Irelia.png'),
      // champ_winRate_1: '58%',
      // champ_winRate_2: '58%',
      // champ_winRate_3: '58%',
      // champ_kda_1: '2.44',
      // champ_kda_2: '2.44',
      // champ_kda_3: '2.44',
      champion_info: [
        {
          CHAMP_KDA: 2.78,
          CHAMP_NAME: require('../assets/images/Galio.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 156,
          CHAMP_WIN_RATE: '51%',
        },
        {
          CHAMP_KDA: 2.92,
          CHAMP_NAME: require('../assets/images/Irelia.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 111,
          CHAMP_WIN_RATE: '50%',
        },
        {
          CHAMP_KDA: 2.73,
          CHAMP_NAME: require('../assets/images/Nunu.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 34,
          CHAMP_WIN_RATE: '44%',
        },
      ],
      description: '여러분 한판 뜹시다. 저 진짜 장난아닙니다.',
    },
  
    {
      nickname: '개란말이개미',
      profileImg: require('../assets/images/Irelia.png'),
      tier: 'Diamond 4',
      line: 'mid',
      lolingId: 'Soodoll',
      mannerTierImg: require('../assets/images/diamond.png'),
      championImg: require('../assets/images/Galio.png'),
      rank: 'Gold 3',
      winRate: '승률 59%',
      winLose: '74승 52패',
      line_info: [
        {
          LINE_KDA: 2.75,
          LINE_NAME: 'JUNGLE',
          LINE_COUNT: 34,
          QUEUE_TYPE: '420',
          LINE_WIN_RATE: '58.8%',
        },
        {
          LINE_KDA: 2.27,
          LINE_NAME: 'BOTTOM',
          LINE_COUNT: 19,
          QUEUE_TYPE: '420',
          LINE_WIN_RATE: '42.1%',
        },
      ],
      // championImg_1: require('../assets/images/Graves.png'),
      // championImg_2: require('../assets/images/Galio.png'),
      // championImg_3: require('../assets/images/Irelia.png'),
      // champ_winRate_1: '58%',
      // champ_winRate_2: '58%',
      // champ_winRate_3: '58%',
      // champ_kda_1: '2.44',
      // champ_kda_2: '2.44',
      // champ_kda_3: '2.44',
      champion_info: [
        {
          CHAMP_KDA: 2.78,
          CHAMP_NAME: require('../assets/images/Galio.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 156,
          CHAMP_WIN_RATE: '51%',
        },
        {
          CHAMP_KDA: 2.92,
          CHAMP_NAME: require('../assets/images/Irelia.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 111,
          CHAMP_WIN_RATE: '50%',
        },
        {
          CHAMP_KDA: 2.73,
          CHAMP_NAME: require('../assets/images/Nunu.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 34,
          CHAMP_WIN_RATE: '44%',
        },
      ],
      description: '여러분 한판 뜹시다. 저 진짜 장난아닙니다.',
    },
  
    {
      nickname: '모닝글라스',
      profileImg: require('../assets/images/Irelia.png'),
      tier: 'Diamond 4',
      line: 'bottom',
      lolingId: 'Soodoll',
      mannerTierImg: require('../assets/images/diamond.png'),
      championImg: require('../assets/images/Galio.png'),
      rank: 'Gold 3',
      winRate: '승률 59%',
      winLose: '74승 52패',
      line_info: [
        {
          LINE_KDA: 2.75,
          LINE_NAME: 'JUNGLE',
          LINE_COUNT: 34,
          QUEUE_TYPE: '420',
          LINE_WIN_RATE: '58.8%',
        },
        {
          LINE_KDA: 2.27,
          LINE_NAME: 'BOTTOM',
          LINE_COUNT: 19,
          QUEUE_TYPE: '420',
          LINE_WIN_RATE: '42.1%',
        },
      ],
      // championImg_1: require('../assets/images/Graves.png'),
      // championImg_2: require('../assets/images/Galio.png'),
      // championImg_3: require('../assets/images/Irelia.png'),
      // champ_winRate_1: '58%',
      // champ_winRate_2: '58%',
      // champ_winRate_3: '58%',
      // champ_kda_1: '2.44',
      // champ_kda_2: '2.44',
      // champ_kda_3: '2.44',
      champion_info: [
        {
          CHAMP_KDA: 2.78,
          CHAMP_NAME: require('../assets/images/Galio.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 156,
          CHAMP_WIN_RATE: '51%',
        },
        {
          CHAMP_KDA: 2.92,
          CHAMP_NAME: require('../assets/images/Irelia.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 111,
          CHAMP_WIN_RATE: '50%',
        },
        {
          CHAMP_KDA: 2.73,
          CHAMP_NAME: require('../assets/images/Nunu.png'),
          QUEUE_TYPE: '420',
          CHAMP_COUNT: 34,
          CHAMP_WIN_RATE: '44%',
        },
      ],
      description: '여러분 한판 뜹시다. 저 진짜 장난아닙니다.',
    },
  
    {
      nickname: '부실멘탈',
      profileImg: require('../assets/images/Teemo.png'),
      tier: 'Diamond 4',
      line: 'support',
    },
  
    {
      nickname: '고려대김자헌',
      profileImg: require('../assets/images/Graves.png'),
      tier: 'Diamond 4',
      line: 'jungle',
    },
  
    {
      nickname: '겨드랑이에낀손',
      profileImg: require('../assets/images/Gwen.png'),
      tier: 'Diamond 4',
      line: 'jungle',
    },
  
    {
      nickname: '즐거운프리핸드',
      profileImg: require('../assets/images/Lulu.png'),
      tier: 'Diamond 4',
      line: 'mid',
    },
  
    {
      nickname: '웰시코기궁둥이',
      profileImg: require('../assets/images/Lux.png'),
      tier: 'Diamond 4',
      line: 'support',
    },
  
    {
      nickname: '불꽃근력마초보이',
      profileImg: require('../assets/images/Lucian.png'),
      tier: 'Diamond 4',
      line: 'top',
    },
  
    {
      nickname: '김수돌',
      profileImg: require('../assets/images/MissFortune.png'),
      tier: 'Diamond 4',
      line: 'support',
    },
  
    {
      nickname: '리븐의신리신',
      profileImg: require('../assets/images/Nunu.png'),
      tier: 'Diamond 4',
      line: 'jungle',
    },
  
    {
      nickname: '후리스와청바지',
      profileImg: require('../assets/images/Varus.png'),
      tier: 'Diamond 4',
      line: 'bottom',
    },
  
    {
      nickname: '따뜻한날씨',
      profileImg: require('../assets/images/Vayne.png'),
      tier: 'Diamond 4',
      line: 'mid',
    },
  ],
});

export const profilesState = atom({
  key: 'profilesState',
  default: [
    {
      nickname: 'RecoilSoodoll',
      tier: 'Gold 3',
      winrate: '59%',
      KDA: '3.87',
      champ1Winrate: '57%',
      champ2Winrate: '100%',
      champ3Winrate: '85%',
      champ1KDA: '3.87',
      champ2KDA: '3.87',
      champ3KDA: '3.87',
      line1Winrate: '85%',
      line2Winrate: '85%',
      line1KDA: '3.87',
      line2KDA: '3.87',
      profileImg: require('../assets/images/Irelia.png'),
    },
  ],
});

export const championsState = atom({
  key: 'championsState',
  default: [],
});

export const lol_accountState = atom({
  key: 'lol_accountState',
  default: [
    {
      lol_name: '즐거운 프리핸드',
      tier: 'Gold 3',
      mostChampWinRate: '57%',
      mostChampKDA: '3.87',
      mostLineWinRate: '57%',
      mostLineKDA: '3.87',
    },
    {
      lol_name: '아이린조이세젤예',
      tier: 'Gold 3',
      mostChampWinRate: '57%',
      mostChampKDA: '3.87',
      mostLineWinRate: '57%',
      mostLineKDA: '3.87',
    },
  ],
});

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: [],
});
