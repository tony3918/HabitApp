import {SafeAreaView, View} from 'react-native';

import HabitItem from '../common/HabitItem';
import Header from '../common/Header';
import React from 'react';
import RepeatSelector from '../common/RepeatSelector';

const Today = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Header title="Current Habits" />
      <RepeatSelector onSelection={() => {}} />
      <View style={{marginHorizontal: 16}}>
        <HabitItem prev="do x" then="do y and z" label="1" />
        <HabitItem prev="do x" then="do y and z" label="2" />
        <HabitItem prev="do x" then="do y and z" label="3" />
        <HabitItem prev="do x" then="do y and z" label="4" />
      </View>
    </SafeAreaView>
  );
};

export default Today;
