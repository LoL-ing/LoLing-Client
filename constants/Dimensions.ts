import {Dimensions, StatusBar, PixelRatio} from 'react-native';
const basicDimensions = {
  width: 360,
  height: 720,
};

const androidBottomNavigationBarHeight: any = StatusBar.currentHeight
  ? Dimensions.get('screen').height -
    Dimensions.get('window').height -
    StatusBar.currentHeight
  : 0;

const width: any = Dimensions.get('window').width / basicDimensions.width;

const height: any = Dimensions.get('window').height / basicDimensions.height;

const font: any = Dimensions.get('window').height / basicDimensions.height;

function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * height : size * width;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
//for font pixel
const hPixel = heightPixel(10);
const wPixel = widthPixel(10);
const fontPixel = (size: number) => {
  const pixel = hPixel > wPixel ? heightPixel(size) : widthPixel(size);
  return pixel;
};

export default {
  // width,
  // height,
  // font,
  androidBottomNavigationBarHeight,
  widthPixel,
  heightPixel,
  fontPixel,
};
