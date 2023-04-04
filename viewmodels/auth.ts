// 회원가입
// 로그인
// 로그아웃
// 유저 정보 가져오기?

import {apiGetAccessToken} from '../api/main';
import {authAtom} from '../models/atom';
import {getAccessTokenSelector} from '../models/selector';
import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';

export const login = async (props: {email: string; password: string}) => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const {
    data: {accessToken, refreshToken},
  } = await apiGetAccessToken({email: props.email, password: props.password});
  setAuth({
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
};

export function useLoginViewModel(props: {username: string; password: string}) {
  try {
    // const {accessToken, refreshToken} = useRecoilValue(
    //   getAccessTokenSelector({
    //     username: props.username,
    //     password: props.password,
    //   }),
    // );
    // const {accessToken,refreshToken} = getAccessTokenSelector({
    //          username: props.username,
    //          password: props.password,
    //        })
  } catch (e) {
    if (e.message == 'ID') {
      console.log('Login Error: no account exists');
      return 3;
    } else if (e.message == 'PW') {
      console.log('Login Error: password is not correct');
      return 2;
    } else {
      console.log(e);
      return 1;
    }
  }
  return 0;
}
