import React, { memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../theme/colors';

type Props = {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const gradientStart = { x: 0, y: 1 };
const gradientEnd = { x: 1, y: 0 };
const gradientColors = [colors.violet, colors.blue];

const BackgroundGradient: React.FC<Props> = ({ disabled, style, children }) =>
  disabled ? (
    <View style={style}>{children}</View>
  ) : (
    <LinearGradient start={gradientStart} end={gradientEnd} colors={gradientColors} style={style}>
      {children}
    </LinearGradient>
  );
export default memo(BackgroundGradient);
