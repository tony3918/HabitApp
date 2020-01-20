import Header from '../common/Header';
import React from 'react';
import {SafeAreaView} from 'react-native';

const AllHabits = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Header title="All Habits" />
    </SafeAreaView>
  );
};

export default AllHabits;
