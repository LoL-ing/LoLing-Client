/* eslint-disable no-useless-catch */
// refresh 참고 : https://skyblue300a.tistory.com/10

import axios from 'axios';
import {selector, selectorFamily} from 'recoil';
import {
  apiGetChampions,
  apiGetProfiles,
  apiGetLoLAccount,
  apiGetAccessToken,
  apiGetToken,
} from '../api/main';
// import {friendsState, profilesState} from './atom';
// import {lol_accountState} from './atom';
import {authAtom} from './atom';

// export const getMyProfileSelector = selector({
//   key: `profile/get`,
//   get: ({get}) => {
//     //const {data} = await apiGetProfile();
//     const data = get(profilesState);
//     return data;
//   },
//   set: ({set}, newValue) => {
//     set(profilesState, newValue);
//   },
// });

// export const getFriendsSelector = selector({
//   key: `friends/get`,
//   get: ({get}) => {
//     //const {data} = await apiGetProfiles();
//     const data = get(friendsState);
//     return data;
//   },
//   set: ({set}, newValue) => {
//     set(friendsState, newValue);
//   },
// });

// export const getChampionsSelector = selector({
//   key: `champions/get`,
//   get: async ({get}) => {
//     const {data} = await apiGetChampions();
//     return data;
//   },
//   set: ({set}, newValue) => {
//     set(friendsState, newValue);
//   },
// });

// export const getLoLAccountSelector = selector({
//   key: `lol_account/get`,
//   get: ({get}) => {
//     //const {data} = await apiGetLoLAccount();
//     const data = get(lol_accountState);
//     return data;
//   },
// });
interface AuthItemType {
  accessToken: string | null;
  refreshToken: string | null;
}
// type ErrorWithMessage= {message:string}

export const getAccessTokenSelector = selectorFamily<any, any>({
  key: 'auth/login',
  get:
    ({username, password}) =>
    async ({get}) => {
      // const {data} = await apiGetAccessToken({username, password});
      // console.log(data);
      // if (data == 500) {
      //   throw new Error('ID');
      // } else if (data == 403) {
      //   throw new Error('PW');
      // } else if (data == 200) {
      //   return data;
      // } else throw new Error('');
      const data = get(authAtom);
      return data;
    },
  set:
    //set도 전달해줄 매개변수가 필요함.


      data =>
      ({set}, newValue: AuthItemType) => {
        set(authAtom, newValue);
      },
});
