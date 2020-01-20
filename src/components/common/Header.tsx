import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLOR} from '../../lib/styles';
import Icon from 'react-native-vector-icons/Foundation';
import React from 'react';

type Props = {
  title: string;
};
const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>My Stats</Text>
        <Icon name="graph-bar" size={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomColor: COLOR.DEFAULT,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: COLOR.DEFAULT,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  buttonText: {fontSize: 16, marginRight: 8},
});

export default Header;
