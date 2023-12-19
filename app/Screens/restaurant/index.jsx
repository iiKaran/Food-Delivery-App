import {
  View,
  Text,
  Linking,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeft, MapPin, Star} from 'react-native-feather';
import {themeColors} from '../../Themes/ThemeColors';
import DishRow from './Components/DishRow';
import CartIcon from './Components/CartIcon';
import {useDispatch} from 'react-redux';
import { setResturant } from '../../Redux/Slices/RestaurantSlice';

const Restaurant = () => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  let item = params;
  const navigation = useNavigation();
  useEffect(() => {

    if(item && item.id){
      dispatch(setResturant({...item}))
    }
  }, []);

  return (
    <View>
      <CartIcon />
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image className="w-full h-72" source={{uri: item.image}} />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Star height={20} width={20} stroke="green" />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    {item.reviews} reviews | {item.category}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPin height={15} width={15} />
                <Text className="text-xs text-gray-700">
                  Nearby {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 font-semibold">
              {item.description}
            </Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="p-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}

          {item.dishes.map((dish, index) => (
            <DishRow item={{...dish}} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;
