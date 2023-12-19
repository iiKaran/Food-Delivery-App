import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import {themeColors} from '../../Themes/ThemeColors';
import Categories from './Components/Categories';
import {featured} from '../../Constants';
import FeaturedRow from './Components/FeaturedRow';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"></StatusBar>
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder="Restaurant" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-600">New York</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="p-3 rounded-full">
          <Icon.Sliders
            height={20}
            width={20}
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>
      {/* main area */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}>
        {/* categories */}
        <Categories />
        <View className="mt-5">
          {[featured, featured, featured].map((val, index) => {
            return (
              <FeaturedRow
                key={index}
                title={val.title}
                restaurants={val.restaurants}
                description={val.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
