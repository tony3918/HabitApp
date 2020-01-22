import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client';

import MainTabNavigator from './components/navigation/MainTabNavigator';
import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';

export const typeDefs = gql`
  type Habit {
    prev: String!
    then: String!
    label: String!
    day: String!
  }

  type Query {
    habits: [Habit]!
  }

  type Mutation {
    addOrRemoveHabit(id: ID!): [Habit]
  }
`;

const cache = new InMemoryCache();
cache.writeData({
  data: {
    habits: [
      {prev: 'do x', then: 'do y', label: '1', day: 'TUE'},
      {prev: 'do x', then: 'do y', label: '3', day: 'WED'},
      {prev: 'do x', then: 'do y', label: '2', day: 'ALL'},
      {prev: 'do x', then: 'do y', label: '4', day: 'MON'},
    ],
  },
});

const client = new ApolloClient({
  cache,
  link: new HttpLink(),
  typeDefs,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationNativeContainer>
        <MainTabNavigator />
      </NavigationNativeContainer>
    </ApolloProvider>
  );
};

export default App;
