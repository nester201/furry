import React, { memo, useMemo } from 'react';
import { Image, View, ViewStyle } from 'react-native';

type Props = {
  size: number;
  uri?: string;
};

const Avatar: React.FC<Props> = ({ size, uri }) => {
  const containerStyle: ViewStyle = useMemo(() => ({ width: size, height: size, borderRadius: size }), [size]);
  const sourceForAvatar = useMemo(
    () => (uri ? { uri: uri } : require('../../../assets/images/user-default.png')),
    [uri]
  );

  return (
    <View style={containerStyle}>
      <Image source={sourceForAvatar} borderRadius={size} />
    </View>
  );
};

export default memo(Avatar);
