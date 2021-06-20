/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Tabs from './src/pages/Tabs/Tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import  Person  from './src/pages/Persons/Person'

const MainStackContainor = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStackContainor.Navigator>
        <MainStackContainor.Screen name="Tabs" component={Tabs} />
        <MainStackContainor.Screen  name="Persons" component={Person}/>
      </MainStackContainor.Navigator>
    </NavigationContainer>
  );
};
export default App;
