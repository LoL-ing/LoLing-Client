/* eslint-disable no-useless-catch */
// refresh 참고 : https://skyblue300a.tistory.com/10

import axios from 'axios';
import {selector, selectorFamily} from 'recoil';
import {
  apiGetChampions,
  apiGetProfiles,
  apiGetLoLAccount,
  apiGetAccessToken,
} from '../api/main';
import {friendsState, profilesState} from './atom';
import {lol_accountState} from './atom';
import {accessTokenState} from './atom';

export const getMyProfileSelector = selector({
  key: `profile/get`,
  get: ({get}) => {
    //const {data} = await apiGetProfile();
    const data = get(profilesState);
    return data;
  },
  set: ({set}, newValue) => {
    set(profilesState, newValue);
  },
});

export const getFriendsSelector = selector({
  key: `friends/get`,
  get: ({get}) => {
    //const {data} = await apiGetProfiles();
    const data = get(friendsState);
    return data;
  },
  set: ({set}, newValue) => {
    set(friendsState, newValue);
  },
});

export const getChampionsSelector = selector({
  key: `champions/get`,
  get: async ({get}) => {
    const {data} = await apiGetChampions();
    return data;
  },
  set: ({set}, newValue) => {
    set(friendsState, newValue);
  },
});

export const getLoLAccountSelector = selector({
  key: `lol_account/get`,
  get: ({get}) => {
    //const {data} = await apiGetLoLAccount();
    const data = get(lol_accountState);
    return data;
  },
});

export const getAccessTokenSelector = selectorFamily({
  key: `sign_in/get`,
  get:
    (email, password) =>
    async ({get}) => {
      const {data} = await apiGetAccessToken({email, password});
      return data;
    },
  set: ({set}, newValue) => {
    set(accessTokenState, newValue);
  },
});
