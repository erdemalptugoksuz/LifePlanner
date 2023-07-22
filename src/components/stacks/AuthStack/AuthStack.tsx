import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Onboarding} from '../../../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AuthStack;
