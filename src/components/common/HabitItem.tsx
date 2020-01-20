import {StyleSheet, Text, View} from 'react-native';

import {COLOR} from '../../lib/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

type Props = {prev: string; then: string; label: '1' | '2' | '3' | '4'};
const HabitItem: React.FC<Props> = ({prev, then, label}) => {
  const color =
    label === '1'
      ? COLOR.LABEL_1
      : label === '2'
      ? COLOR.LABEL_2
      : label === '3'
      ? COLOR.LABEL_3
      : COLOR.LABEL_4;
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Icon style={{marginRight: 20}} name="check-circle" size={40} />
      <View>
        <Text style={styles.then}>I will {then}</Text>
        <Text style={styles.prev}>After I {prev}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  prev: {
    fontSize: 18,
    fontWeight: '300',
  },
  then: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default HabitItem;
