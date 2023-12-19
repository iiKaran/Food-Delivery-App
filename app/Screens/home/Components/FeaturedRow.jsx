import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {themeColors} from '../../../Themes/ThemeColors';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description, restaurants}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center p-4 ">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15 , paddingBottom:20}} >
        {restaurants.map((val, index) => {
          return <RestaurantCard item={val} key={index}/>;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
