import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../../../Constants';
const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          let textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray-500';
          return (
            <View
              key={index}
              className={'flex justify-center items-center mr-6 mt-5'}>
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={'p-5 rounded-full shadow-lg ' + btnClass}
                >
                <Image
                  className="rounded-full"
                  style={{height: 45, width: 45}}
                  source={{uri: category.image}}
                />
              </TouchableOpacity>
              <Text className={'text-sm' + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Categories;
