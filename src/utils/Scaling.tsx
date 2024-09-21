import { Dimensions, PixelRatio } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'; // Todo - Learn About This
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; // Todo - Learn About This

export const normalizeModerately = (size: number, factor = 0.5): number => {
  return PixelRatio.roundToNearestPixel(moderateScale(size, factor)); // Todo - Learn About This. - What is PixelRatio and roundToNearestPixel
};

export const normalizeWidth = (size: number): number => {
  return PixelRatio.roundToNearestPixel(scale(size));
};

export const normalizeHeight = (size: number): number => {
  return PixelRatio.roundToNearestPixel(verticalScale(size));
};

export const widthPercentage = (size: string): number => {
  return wp(size);
};
export const heightPercentage = (size: string): number => {
  return hp(size);
};

export const SCREENS_WIDTH: number = Dimensions.get('window').width;
export const SCREENS_HEIGHT: number = Dimensions.get('window').height;
