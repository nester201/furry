import React, { useCallback, useMemo } from 'react';
import { Alert, Pressable, StyleSheet, View, ViewStyle, Image } from 'react-native';
import EditSVG from '../../../assets/icons/editBlack.svg';
import PlusSVG from '../../../assets/icons/plus.svg';
import * as ImagePicker from 'expo-image-picker';
import useToggle from '@hooks/useToggle';
import { useWatch } from 'react-hook-form';
import colors from '@theme/colors';
import Avatar from '@ui/Avatar';
import ModalSelector from '@components/ModalSelector/ModalSelector';
import ModalSelectorItem from '@components/ModalSelector/ModalSelectorItem';

type Props = {
  defaultAvatar?: string | null;
  onChange: (value: string) => void;
  edit?: boolean;
};

const EditAvatar: React.FC<Props> = ({ defaultAvatar, edit, onChange }) => {
  const { on, toggleOff, toggleOn } = useToggle();
  const imageAvatar = useWatch({ name: 'avatar' });

  const photoImage = useMemo(() => (imageAvatar ? { uri: imageAvatar } : { uri: defaultAvatar }), [imageAvatar]);

  const handleClickCamera = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        onChange(result.assets[0].uri);
      }
    } catch (e: any) {
      Alert.alert(e);
    } finally {
      toggleOff();
    }
  };

  const handleClickLibrary = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        onChange(result.assets[0].uri);
      }
    } catch (e: any) {
      Alert.alert(e);
    } finally {
      toggleOff();
    }
  }, [toggleOff]);

  const containerStyle = useMemo(() => (edit ? styles.photoButtonEdit : photoButtonStyle), [edit]);

  return (
    <>
      <Pressable style={containerStyle} onPress={toggleOn}>
        {photoImage.uri ? (
          <>
            {edit ? (
              <View>
                <Image style={styles.photoImage} source={photoImage} accessibilityIgnoresInvertColors={false} />
                <Pressable style={styles.plusIcon}>
                  <EditSVG width={13} height={13} fill={colors.violet} />
                </Pressable>
              </View>
            ) : (
              <Image style={styles.photoImage} source={photoImage} accessibilityIgnoresInvertColors={false} />
            )}
          </>
        ) : (
          <View>
            <Avatar size={112} />
            <Pressable style={styles.plusIcon}>
              <PlusSVG width={13} height={13} fill={colors.violet} />
            </Pressable>
          </View>
        )}
      </Pressable>
      <ModalSelector visible={on} handleClose={toggleOff}>
        <ModalSelectorItem text={'Photo'} handleClick={handleClickCamera} />
        <ModalSelectorItem text={'Gallery'} handleClick={handleClickLibrary} lastChild={true} />
      </ModalSelector>
    </>
  );
};

export default EditAvatar;

const photoButtonStyle: ViewStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  marginVertical: 30,
};

const styles = StyleSheet.create({
  photoButtonEdit: {
    ...photoButtonStyle,
    marginVertical: 30,
  },
  photoImage: {
    width: 112,
    height: 112,
    borderRadius: 57,
    overflow: 'hidden',
  },
  plusIcon: {
    position: 'absolute',
    right: 2,
    bottom: 4,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#323247',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 50,
  },
});
