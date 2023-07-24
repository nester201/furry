import colors from './colors';
import { TextStyle, ViewStyle } from 'react-native';

export const MAIN_CONTAINER: ViewStyle = {
  flex: 1,
  paddingTop: 50,
};

export const BOX_SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.15,
  shadowRadius: 10,

  elevation: 5,
};

export const TEXT: TextStyle = {
  fontWeight: '400',
  color: colors.black,
  fontStyle: 'normal',
  fontSize: 16,
  lineHeight: 24,
  textAlign: 'center',
};

export const TEXT_H1: TextStyle = {
  ...TEXT,
  fontWeight: '700',
  fontSize: 34,
};

export const TEXT_H2: TextStyle = {
  ...TEXT,
  fontWeight: '700',
  fontSize: 24,
};

export const TEXT_H3: TextStyle = {
  ...TEXT,
  fontWeight: '700',
  fontSize: 18,
};
