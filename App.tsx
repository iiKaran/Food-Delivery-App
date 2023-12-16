/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/Screens/home/index';
import Restaurant from './app/Screens/restaurant';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Overview' }}/>
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
