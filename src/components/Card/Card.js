import React from 'react';
import { Text } from 'react-native';
import { View } from '../Card/Card.style'

const Card = props => {
  const { name } = props;
  return (
    <View>
      <Text style={{textAlign:"center"}}> {name} </Text>
    </View>
  )

};

export default Card;
