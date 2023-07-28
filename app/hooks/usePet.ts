import { useEffect, useState } from 'react';
import { IPet } from '@app/interface/IPet';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@app/firebase';
import { useAuth } from '@hooks/useAuth';
import { Alert } from 'react-native';

interface IUsePet {
  pet: IPet;
  isLoading: boolean;
}
export const usePet = (petId: string): IUsePet => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [pet, setPet] = useState<IPet>({} as IPet);

  useEffect(() => {
    if (user) {
      try {
        onSnapshot(query(collection(db, 'pets'), where('userId', '==', user?.uid)), snapshot =>
          snapshot.docs.map(item => {
            if (item.id == petId) {
              setPet(({ ...item.data() } as IPet) || {});
            }
          })
        );
      } catch (e: any) {
        Alert.alert('Error find pet', e.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [user, petId]);

  return { pet, isLoading };
};
