import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {featured} from '../../Constants';
import {themeColors} from '../../Themes/ThemeColors';
import {ArrowLeft, Clock, Minus} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectResturant} from '../../Redux/Slices/RestaurantSlice';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../../Redux/Slices/BasketSlice';

const CartScreen = () => {
  const restaurant = useSelector(selectResturant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectBasketItems);
  const cartTotal = useSelector(selectBasketTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFee = 2;
  const dispatch = useDispatch();
  useEffect(() => {
    const gItems = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(gItems);
  }, [cartItems]);
  return (
    <View className="bg-white flex-1">
      {/* backbutton */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full p-3 shadow top-5 left-2">
          <ArrowLeft stroke={'white'} strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* delivery time  */}
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row p-4 items-center">
        <Clock
          stroke={themeColors.bgColor(1)}
          height={40}
          width={40}
          strokeWidth={4}
        />
        <Text className="flex-1 pl-4 font-semibold text-center">
          Delivery in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{color: themeColors.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="bg-white pt-5">
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
              <Text className="font-bold" style={{color: themeColors.text}}>
                {items.length} x
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={{uri: dish.image}}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="text-base font-semibold">$ {dish.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({id: dish.id}))}
                className="p-1 rounded-full"
                style={{backgroundColor: themeColors.bgColor(1)}}>
                <Minus
                  strokeWidth={2}
                  stroke={'white'}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        className="p-6 px-8 rounded-t-3xl space-y-4"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$ 20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$ 2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">
            $ {deliveryFee + cartTotal}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPreparing')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-xl">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
