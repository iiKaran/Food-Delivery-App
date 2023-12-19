import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {featured} from '../../Constants';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeColors} from '../../Themes/ThemeColors';
import {Phone, X} from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {selectResturant} from '../../Redux/Slices/RestaurantSlice';
import {useNavigation} from '@react-navigation/native';
import { emptyBasket } from '../../Redux/Slices/BasketSlice';
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectResturant);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(emptyBasket());
    navigation.navigate('Home');
  };
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
        minDelta={0.001}>
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
          
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival Time
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is on its way!
            </Text>
          </View>
          <Image
            className="h-24 w-24"
            source={{uri: 'https://picsum.photos/200/300'}}
          />
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(0.8)}}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View
            style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
            className="p-1 rounded-full">
            <Image
              style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
              className="w-16 h-16 rounded-full"
              source={{uri: 'https://picsum.photos/200/300'}}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Bhupendar Jogi</Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth="1"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleCancel}
              className="bg-white p-2 rounded-full">
              <X stroke={'red'} strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
