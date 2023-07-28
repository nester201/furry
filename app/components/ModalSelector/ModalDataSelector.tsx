import React, { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import ModalSelector from './ModalSelector';
import ModalSelectorItem from './ModalSelectorItem';
import { IModalSelectorData } from '@app/interface/IModalSelectorData';
import { getKeyExtractorIds } from '@app/utils/keyExtractor';

type Props = {
  visible: boolean;
  handleClose: () => void;
  data: IModalSelectorData[];
  callback: (item: IModalSelectorData) => void;
};

const ModalDataSelector: React.FC<Props> = ({ visible, handleClose, data, callback }) => {
  const renderItem: ListRenderItem<IModalSelectorData> = useCallback(
    ({ item, index }) => {
      const handleClick = () => {
        callback(item);
      };

      return <ModalSelectorItem text={item.name} handleClick={handleClick} lastChild={index === data.length - 1} />;
    },
    [callback, data.length]
  );

  return (
    <ModalSelector visible={visible} handleClose={handleClose}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={getKeyExtractorIds} alwaysBounceVertical={false} />
    </ModalSelector>
  );
};

export default memo(ModalDataSelector);
