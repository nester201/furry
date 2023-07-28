import { IPet } from '@app/interface/IPet';
import { useCallback, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@app/firebase';
import { useAuth } from '@hooks/useAuth';
import { Alert } from 'react-native';

interface useAddPet {
  onAddPet: (data: IPet, url: string) => Promise<void>;
  isLoading: boolean;
}

export const useAddPet = (): useAddPet => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onAddPet = useCallback(async (data: IPet, url: string) => {
    if (user) {
      try {
        setIsLoading(true);
        await addDoc(collection(db, 'pets'), {
          userId: user.uid,
          petName: data.petName,
          speciesPet: data.speciesPet,
          breed: data.breed,
          gender: data.gender,
          avatar: url,
        });
      } catch (e: any) {
        Alert.alert(e.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return { isLoading, onAddPet };
};
