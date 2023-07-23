import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppsPage, TaskManagement, BudgetManager} from '../../../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppsPageScreen" component={AppsPage} />
      <Stack.Screen name="TaskManagementScreen" component={TaskManagement} />
      <Stack.Screen name="BudgetManagerScreen" component={BudgetManager} />
    </Stack.Navigator>
  );
};

export default AuthStack;
