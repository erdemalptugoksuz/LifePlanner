import React, {useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/Feather';

import {authErrorMessageParser} from '../../../assets';
import styles from './ForgotPassword.style';
import {Header, Input, DarkButton} from '../../../components';

const ForgotPassword = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScreenMovement = async () => {
    try {
      setLoading(true);
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Şifre Yenileme',
        'Şifre yenileme bağlantınız e-posta adresinize gönderildi.',
      );
      navigation.navigate('SignInScreen');
      setLoading(false);
    } catch (error: any) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
        icon: 'danger',
      });
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="arrow-left"
        color={'white'}
        size={30}
        onPress={() => navigation.goBack()}
        style={styles.icon}
      />
      <View style={styles.bodyContainer}>
        <Header
          heading={'Tüh be!'}
          description={
            'Şifreni mi unuttun? Hiç sorun değil! Güvenlik sorun ile hemen yenisini al.'
          }
        />
        <View style={styles.inputContainer}>
          <Input
            inputName={'E-Posta'}
            textEntry={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <DarkButton
          title={'Şifre Yenile'}
          onPress={handleScreenMovement}
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
