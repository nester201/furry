import { useCallback, useMemo, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { storage } from '@app/firebase';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Alert } from 'react-native';

export const useUpload = () => {
  const [url, setUrl] = useState<string>('');

  const uploadImageAsync = async (uri: string) => {
    const blob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const fileRef = ref(storage, uuidv4());
    const result = await uploadBytes(fileRef, blob);
    if (result) {
      Alert.alert('Photo saved');
    }

    return await getDownloadURL(fileRef);
  };

  const uploadAvatar = useCallback(
    async (avatar: string) => {
      const uploadUrl = await uploadImageAsync(avatar);
      setUrl(uploadUrl);
    },
    [uploadImageAsync]
  );

  const values = useMemo(() => ({ url, uploadAvatar }), [url, uploadAvatar]);

  return values;
};
