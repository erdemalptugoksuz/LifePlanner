import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppsPage, TaskManagement} from '../../../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppsPageScreen" component={AppsPage} />
      <Stack.Screen name="TaskManagementScreen" component={TaskManagement} />
    </Stack.Navigator>
  );
};

export default AuthStack;
