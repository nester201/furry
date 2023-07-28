import React, { memo, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { modalSelectorStyles } from './ModalSelector';

type Props = {
  text: string;
  handleClick: () => void;
  lastChild?: boolean;
};

const ModalSelectorItem: React.FC<Props> = ({ text, handleClick, lastChild }) => {
  const buttonStyles = useMemo(
    () => [modalSelectorStyles.button, { borderBottomWidth: lastChild ? 1 : 0 }],
    [lastChild]
  );

  return (
    <Pressable style={buttonStyles} onPress={handleClick}>
      <Text style={modalSelectorStyles.text}>{text}</Text>
    </Pressable>
  );
};

export default memo(ModalSelectorItem);
