import { useAuth } from '@hooks/useAuth';
import { useState } from 'react';
import { Alert } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@app/firebase';
import { IProfile } from '@app/interface/IProfile';

export const useUpdateProfile = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async (data: IProfile, docId: string) => {
    if (!user) return;
    setIsLoading(true);
    try {
      const docRef = doc(db, 'users', docId);
      await updateDoc(docRef, {
        displayName: data.displayName,
        city: data.city,
        gender: data.gender,
        phoneNumber: data.phoneNumber,
      });
    } catch (e: any) {
      Alert.alert('Error update profile', e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, updateProfile };
};
