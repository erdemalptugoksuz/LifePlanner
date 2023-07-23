import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import {authErrorMessageParser} from '../../../assets';
import styles from './SignIn.style';
import {Header, Input, DarkButton, LoginSwitch} from '../../../components';

const SignIn = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSwitchLoginMovement = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleForgotPasswordMovement = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const handleSignInMovement = async () => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
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
      <View style={styles.bodyContainer}>
        <Header
          heading={'Tekrar Hoş Geldin'}
          description={
            'Aramıza tekrar hoş geldin! Hadi hemen e-posta hesabını gir ve bağlan.'
          }
        />
        <View style={styles.inputContainer}>
          <Input
            inputName={'E-Posta'}
            textEntry={false}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            inputName={'Şifre'}
            textEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Text
            style={styles.forgotPassword}
            onPress={handleForgotPasswordMovement}>
            Şifremi Unuttum
          </Text>
        </View>
        <DarkButton
          title={'Giriş Yap'}
          onPress={handleSignInMovement}
          loading={loading}
        />
        <LoginSwitch
          title={'Hesabın yok mu? Kayıt ol.'}
          onPress={handleSwitchLoginMovement}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
