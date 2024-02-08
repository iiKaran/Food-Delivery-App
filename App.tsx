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
import HomeScreen from './app/Screens/home';
import {Provider} from 'react-redux';
import { store } from './app/Redux/Store';
import CartScreen from './app/Screens/cart/components/CartScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{title: 'Overview'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
