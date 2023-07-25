import { useEffect, useMemo, useState } from 'react';
import { IProfile } from '@app/interface/IProfile';
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@app/firebase';
import { useAuth } from '@hooks/useAuth';

export const useProfile = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>();
  const [name, setName] = useState('');
  console.log('user', user);

  useEffect(() => {
    if (user) {
      onSnapshot(query(collection(db, 'users'), where('id', '==', user.uid), limit(1)), snapshot => {
        const profile = snapshot.docs.map(d => ({
          ...(d.data() as Omit<IProfile, 'docId'>),
          docId: d.id,
        }))[0];
        setProfile(profile);
        setName(profile.displayName);
        setIsLoading(false);
      });
    }
  }, []);

  const value = useMemo(() => ({ profile, isLoading, name, setName }), [profile, isLoading]);

  return value;
};
