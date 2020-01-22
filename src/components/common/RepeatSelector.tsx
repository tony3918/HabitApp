import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import Chip from './Chip';

type Props = {onSelection: (selection: number) => void};
const RepeatSelector: React.FC<Props> = ({onSelection}) => {
  const [selection, setSelection] = useState(1);
  return (
    <View style={{paddingHorizontal: 16}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Chip
          active={selection === 1}
          onPress={() => {
            setSelection(1);
            onSelection(1);
          }}
          title="All days"
        />
        <Chip
          active={selection === 2}
          onPress={() => {
            setSelection(2);
            onSelection(2);
          }}
          title="Mon"
        />
        <Chip
          active={selection === 3}
          onPress={() => {
            setSelection(3);
            onSelection(3);
          }}
          title="Tue"
        />
        <Chip
          active={selection === 4}
          onPress={() => {
            setSelection(4);
            onSelection(4);
          }}
          title="Wed"
        />
        <Chip
          active={selection === 5}
          onPress={() => {
            setSelection(5);
            onSelection(5);
          }}
          title="Thu"
        />
        <Chip
          active={selection === 6}
          onPress={() => {
            setSelection(6);
            onSelection(6);
          }}
          title="Fri"
        />
        <Chip
          active={selection === 7}
          onPress={() => {
            setSelection(7);
            onSelection(7);
          }}
          title="Sat"
        />
        <Chip
          active={selection === 8}
          onPress={() => {
            setSelection(8);
            onSelection(8);
          }}
          title="Sun"
        />
      </ScrollView>
    </View>
  );
};

export default RepeatSelector;
