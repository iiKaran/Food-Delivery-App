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
import CartScreen from './app/Screens/Cart/CartScreen';
import OrderPreparingScreen from './app/Screens/OrderPreparing/OrderPreparingScreen';
import DeliveryScreen from './app/Screens/Delivery/DeliveryScreen';
import {Provider} from 'react-redux';
import { store } from './app/Redux/Store';
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
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen
            name="Cart"
            options={{presentation: 'modal'}}
            component={CartScreen}
          />
          <Stack.Screen
            name="OrderPreparing"
            options={{presentation: 'fullScreenModal'}}
            component={OrderPreparingScreen}
          />
          <Stack.Screen
            name="Delivery"
            options={{presentation: 'fullScreenModal'}}
            component={DeliveryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
