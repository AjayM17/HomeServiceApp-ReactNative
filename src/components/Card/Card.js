import React from 'react';
import {Text} from 'react-native';

const Card = props => {
  const {name} = props;
  return <Text> {name} </Text>;
};

export default Card;
