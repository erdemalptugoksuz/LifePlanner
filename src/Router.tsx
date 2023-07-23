import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import {AuthStack} from './components';

const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <AuthStack />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
