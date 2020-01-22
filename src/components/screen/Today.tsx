import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {gql, useQuery} from '@apollo/client';

import HabitItem from '../common/HabitItem';
import Header from '../common/Header';
import RepeatSelector from '../common/RepeatSelector';

const GET_HABITS = gql`
  query GetHabits {
    habits @client
  }
`;

const Today = () => {
  const {data} = useQuery(GET_HABITS);
  const [activeDay, setActiveDay] = useState('ALL');

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Header title="Current Habits" />
      <RepeatSelector
        onSelection={selection => {
          switch (selection) {
            case 1:
              setActiveDay('ALL');
              break;
            case 2:
              setActiveDay('MON');
              break;
            case 3:
              setActiveDay('TUE');
              break;
            case 4:
              setActiveDay('WED');
              break;
            case 5:
              setActiveDay('THU');
              break;
            case 6:
              setActiveDay('FRI');
              break;
            case 7:
              setActiveDay('SAT');
              break;
            case 8:
              setActiveDay('SUN');
              break;
          }
        }}
      />
      <View style={{marginHorizontal: 16}}>
        {data.habits &&
          data.habits.map(({prev, then, label, day}, ind) => {
            if (activeDay === day || activeDay === 'ALL') {
              return (
                <HabitItem
                  key={String(ind)}
                  prev={prev}
                  then={then}
                  label={label}
                />
              );
            }
          })}
      </View>
    </SafeAreaView>
  );
};

export default Today;
