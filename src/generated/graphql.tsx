import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Habit = {
   __typename?: 'Habit',
  prev?: Maybe<Scalars['String']>,
  then?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  habits: Array<Maybe<Habit>>,
};


