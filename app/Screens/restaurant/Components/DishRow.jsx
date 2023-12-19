import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../../../Themes/ThemeColors';
import {Minus, Plus} from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from '../../../Redux/Slices/BasketSlice';

const DishRow = ({item}) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state =>
    selectBasketItemsById(state, item.id),
  );
  const handleIncrease = () => {
    dispatch(addToBasket({...item}));
  };
  const handleDecrease = () => {
    dispatch(removeFromBasket({id: item.id}));
  };
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{height: 100, width: 100}}
        source={{
          uri: item.image,
        }}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row pl-3 justify-between items-center">
          <Text className="text-gray-700 text-lg font-bold">
            $ {item.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              disabled={!totalItems.length}
              onPress={handleDecrease}
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Minus height={20} width={20} stroke="white" strokeWidth={2} />
            </TouchableOpacity>
            <Text className="px-2">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Plus height={20} width={20} stroke="white" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
