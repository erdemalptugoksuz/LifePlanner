import React from 'react';
import {SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './Profile.style';
import {colors} from '../../../assets';
import {ProfileButton} from '../../../components';

const Profile = () => {
  const handleFeedBack = () => {
    null;
  };
  const handleLegacy = () => {
    null;
  };
  const handleSignOut = () => {
    auth().signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileButton
        title="Bize Ulaşın"
        onPress={handleFeedBack}
        name="help-circle"
        color={colors.snow}
        size={17}
      />
      <ProfileButton
        title="Kullanıcı Sözleşmesi"
        onPress={handleLegacy}
        name="paperclip"
        color={colors.snow}
        size={17}
      />
      <ProfileButton
        title="Çıkış Yap"
        onPress={handleSignOut}
        name="log-out"
        color={colors.snow}
        size={17}
      />
    </SafeAreaView>
  );
};

export default Profile;
