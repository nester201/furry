import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@theme/colors';
import EditButton from '@components/Profile/EditButton';
import { BOX_SHADOW, TEXT, TEXT_H2, TEXT_H3 } from '@theme/style';
import Avatar from '@ui/Avatar';
import { useProfile } from '@hooks/useProfile';
import Loader from '@ui/Loader';
import { useAuth } from '@hooks/useAuth';
import BackButton from '@ui/BackButton';

type Props = {
  title: string;
  isEdit?: boolean;
};

const HeaderProfile: React.FC<Props> = ({ title, isEdit }) => {
  const { user } = useAuth();
  const { isLoading, name } = useProfile();

  const containerStyle = useMemo(() => (isEdit ? styles.editContainer : styles.container), [isEdit]);

  return (
    <View style={containerStyle}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.header}>
            {isEdit && <BackButton color={colors.violet} style={{ top: -6.5 }} />}
            <View>
              <Text style={TEXT_H3}>{title}</Text>
            </View>
            {!isEdit && <EditButton />}
          </View>
          <View style={styles.wrapper}>
            <Avatar size={112} />
            {!isEdit && <Text style={styles.username}>{name}</Text>}
            {!isEdit && <Text style={styles.city}>{user?.email}</Text>}
          </View>
        </>
      )}
    </View>
  );
};

export default memo(HeaderProfile);

const styles = StyleSheet.create({
  container: {
    ...BOX_SHADOW,
    paddingTop: 50,
    backgroundColor: colors.white,
    borderBottomRightRadius: 34,
    borderBottomLeftRadius: 34,
    paddingBottom: 30,
    flex: 0.7,
  },
  editContainer: {
    paddingTop: 50,
    flex: 1.5,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 0.6,
  },
  wrapper: {
    flex: 2,
    alignItems: 'center',
  },
  username: {
    ...TEXT_H2,
    marginTop: 35,
  },
  city: {
    ...TEXT,
    color: colors.placeholder,
    marginTop: 15,
  },
});
