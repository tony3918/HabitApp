import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {gql, useApolloClient} from '@apollo/client';

import Chip from '../common/Chip';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TabNavigationProp} from '../navigation/MainTabNavigator';

type Props = {
  navigation: TabNavigationProp<'CreateNew'>;
};
const CreateNew: React.FC<Props> = ({navigation}) => {
  const [prev, setPrev] = useState('');
  const [then, setThen] = useState('');
  const [day, setDay] = useState('ALL');
  const [label, setLabel] = useState('1');
  const client = useApolloClient();

  const navigateToToday = () => {
    setPrev('');
    setThen('');
    setDay('ALL');
    setLabel('1');
    navigation.navigate('Today');
  };
  const addHabit = () => {
    const {habits} = client.readQuery({
      query: gql`
        query GetHabits {
          habits @client
        }
      `,
    });
    client.writeData({data: {habits: [...habits, {prev, then, day, label}]}});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 12,
        }}>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 22, fontWeight: '700'}}>New Habit</Text>
        </View>
        <View style={{position: 'absolute', right: 8}}>
          <Button
            title="Cancel"
            onPress={() => {
              navigateToToday();
            }}
          />
        </View>
      </View>

      <View style={{paddingHorizontal: 16, paddingTop: 24}}>
        <Text style={{fontSize: 20}}>After I,</Text>
        <TextInput
          style={{
            width: '100%',
            borderWidth: 2,
            borderRadius: 10,
            borderColor: 'gray',
            paddingVertical: 12,
            paddingHorizontal: 12,
            marginVertical: 8,
            fontSize: 20,
          }}
          autoCapitalize="none"
          placeholder="hello"
          maxLength={40}
          value={prev}
          onChangeText={setPrev}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Chip
            title="brush my teeth"
            active
            onPress={() => setPrev('brush my teeth')}
          />
          <Chip
            title="had dinner"
            active
            onPress={() => setPrev('had dinner')}
          />
          <Chip
            title="finish my gym"
            active
            onPress={() => setPrev('finish my gym')}
          />
        </ScrollView>
      </View>
      <View style={{paddingHorizontal: 16, paddingTop: 24}}>
        <Text style={{fontSize: 20}}>I will,</Text>
        <TextInput
          style={{
            width: '100%',
            borderWidth: 2,
            borderRadius: 10,
            borderColor: 'gray',
            paddingVertical: 12,
            paddingHorizontal: 12,
            marginVertical: 8,
            fontSize: 20,
          }}
          autoCapitalize="none"
          placeholder="hello"
          maxLength={40}
          value={then}
          onChangeText={setThen}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Chip
            title="brush my teeth"
            active
            onPress={() => setThen('brush my teeth')}
          />
          <Chip
            title="had dinner"
            active
            onPress={() => setThen('had dinner')}
          />
          <Chip
            title="finish my gym"
            active
            onPress={() => setThen('finish my gym')}
          />
        </ScrollView>
      </View>

      <View style={{paddingHorizontal: 16, paddingTop: 24}}>
        <Text style={{fontSize: 20}}>Click on days to remind</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Chip title="All days" active />
          <Chip title="Mon" active />
          <Chip title="Tue" active />
          <Chip title="Wed" active />
          <Chip title="Thu" active />
          <Chip title="Fri" active />
          <Chip title="Sat" active />
          <Chip title="Sun" active />
        </ScrollView>
      </View>

      <View style={{paddingHorizontal: 16, paddingTop: 24}}>
        <Text style={{fontSize: 20}}>Select label color</Text>
        <View style={{paddingVertical: 8, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              backgroundColor: 'pink',
              borderRadius: 16,
              marginRight: 16,
              borderWidth: label === '1' ? 4 : 0,
            }}
            onPress={() => setLabel('1')}
          />
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              backgroundColor: 'green',
              borderRadius: 16,
              marginRight: 16,
              borderWidth: label === '2' ? 4 : 0,
            }}
            onPress={() => setLabel('2')}
          />
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              backgroundColor: 'yellow',
              borderRadius: 16,
              marginRight: 16,
              borderWidth: label === '3' ? 4 : 0,
            }}
            onPress={() => setLabel('3')}
          />
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              backgroundColor: 'blue',
              borderRadius: 16,
              marginRight: 16,
              borderWidth: label === '4' ? 4 : 0,
            }}
            onPress={() => setLabel('4')}
          />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 16,
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'blue',
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 8,
          }}
          onPress={() => {
            navigateToToday();
            addHabit();
          }}
          disabled={!prev || !then}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              style={{marginRight: 8}}
              name="add-circle"
              color="white"
              size={20}
            />
            <Text style={{fontSize: 20, color: 'white'}}>Create New Habit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateNew;
