import MainTabNavigator from './components/navigation/MainTabNavigator';
import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <NavigationNativeContainer>
      <MainTabNavigator />
    </NavigationNativeContainer>
  );
};

export default App;
