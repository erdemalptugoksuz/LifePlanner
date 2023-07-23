import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Onboarding, SignUp, SignIn, ForgotPassword} from '../../../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={Onboarding} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
      <Stack.Screen name="SignInScreen" component={SignIn} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
