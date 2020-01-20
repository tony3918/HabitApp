import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import {COLOR} from '../../lib/styles';
import React from 'react';

type Props = {title: string; active: boolean; onPress?: () => void};
const Chip: React.FC<Props> = ({title, onPress, active}) => {
  return (
    <View style={[styles.container, active && styles.active]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={[styles.title, active && {fontWeight: '500'}]}>
          {title}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.DEFAULT,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginRight: 6,
    borderWidth: 2,
    borderColor: COLOR.DEFAULT,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  active: {
    borderColor: COLOR.PRIMARY,
  },
  title: {
    fontSize: 16,
  },
});

export default Chip;
