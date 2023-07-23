import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import {AuthStack, AppStack} from './components';

const Router = () => {
  const [userSession, setUserSession] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      {!userSession ? <AuthStack /> : <AppStack />}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
