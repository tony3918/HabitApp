import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import AllHabits from '../screen/AllHabits';
import {COLOR} from '../../lib/styles';
import CreateNew from '../screen/CreateNew';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Today from '../screen/Today';

type TabParamList = {
  Today: undefined;
  CreateNew: undefined;
  AllHabits: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();
export type TabNavigationProp<
  T extends keyof TabParamList
> = BottomTabNavigationProp<TabParamList, T>;

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Today"
        component={Today}
        options={{
          title: 'Today',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="home"
              size={size}
              color={focused ? COLOR.PRIMARY : '#999'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreateNew"
        component={CreateNew}
        options={{
          title: 'Create New',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="add-circle"
              size={size}
              color={focused ? COLOR.PRIMARY : '#999'}
            />
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="AllHabits"
        component={AllHabits}
        options={{
          title: 'All Habits',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="check-circle"
              size={size}
              color={focused ? COLOR.PRIMARY : '#999'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
