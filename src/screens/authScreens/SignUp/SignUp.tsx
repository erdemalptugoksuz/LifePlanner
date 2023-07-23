import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import {authErrorMessageParser} from '../../../assets';
import styles from './SignUp.style';
import {Header, Input, DarkButton, LoginSwitch} from '../../../components';

const SignUp = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScreenMovement = async () => {
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
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

  const handleSwitchLoginMovement = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Header
          heading={'Hesap Bilgilerin'}
          description={
            'Hesabın ile bağlantını kaybetmemen için e-posta ile kayıt olman gerek.'
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
        </View>
        <DarkButton
          title={'Kayıt Ol'}
          onPress={handleScreenMovement}
          loading={loading}
        />
        <LoginSwitch
          title={'Hesabın var mı? Giriş yap.'}
          onPress={handleSwitchLoginMovement}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
