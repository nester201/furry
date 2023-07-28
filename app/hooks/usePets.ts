import { useAuth } from '@hooks/useAuth';
import { useEffect, useMemo, useState } from 'react';
import { IPet } from '@app/interface/IPet';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@app/firebase';
import { Alert } from 'react-native';

interface IUsePets {
  pets: IPet[];
  isLoading: boolean;
}

export const usePets = (): IUsePets => {
  const { user } = useAuth();
  const [pets, setPets] = useState<IPet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      try {
        setIsLoading(true);
        onSnapshot(query(collection(db, 'pets'), where('userId', '==', user.uid)), snapshot =>
          setPets(snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as IPet))
        );
      } catch (e: any) {
        Alert.alert(e);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  const value = useMemo(() => ({ pets, isLoading }), [pets, isLoading]);

  return value;
};
