import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {Calendar, AppsPage, Profile, TaskManagement} from '../../../screens';
import {colors} from '../../../assets';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const renderTabIcon = (name: string, size: number, focused: boolean) => {
    return (
      <Icon name={name} size={size} color={focused ? colors.snow : 'gray'} />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: colors.richBlack},
        tabBarActiveTintColor: colors.snow,
        tabBarInactiveTintColor: colors.neutral2,
      }}>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({size, focused}) =>
            renderTabIcon('calendar', size, focused),
        }}
      />
      <Tab.Screen
        name="AppsPageScreen"
        component={AppsPage}
        options={{
          tabBarIcon: ({size, focused}) => renderTabIcon('grid', size, focused),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarIcon: ({size, focused}) => renderTabIcon('user', size, focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
