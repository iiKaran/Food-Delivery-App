import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import {MapPin, Star} from 'react-native-feather';
import {themeColors} from '../../../Themes/ThemeColors';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Restaurant',{...item})}>
      <View
        style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}}
        className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={{uri: item.image}} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
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
            <Text className="text-xs text-gray-700">Nearby {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
