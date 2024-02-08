import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import {themeColors} from '../../../Themes/ThemeColors';
import {useNavigation} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/Slices/cartSlice';
import {Star} from 'react-native-feather';
const DishCard = ({item}) => {
  const renderStars = rate => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} height={20} width={20} stroke="#e78e3d" />);
    }
    for (let i = 0; i < rate; i++) {
        stars[i]=(<Star key={i} height={20} width={20} fill={"#e78e3d"} stroke="#e78e3d" />);
      }
    return stars;
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View
      // style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}}
      className="w-[90vw]   border mb-8  py-3 pt-0   mx-auto rounded-3xl bord mt-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <Image
        className="h-60  rounded-3xl w-full pt-2 "
        style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}}
        source={{uri: item.image}}
      />
      <View className="px-3 pb-4 ">
        <Text className="text-[24px] font-[600]  mt-1  py-1">{item.name}</Text>
        <Text className="text-md font-bold text-[#e78e3d] mt-1 mb-1  ">
          Integredients :
        </Text>
        <Text className="text-sm mt-0 font-bold  opacity-[.96]">
          {item.desc}
          <Text className="text-md font-bold text-[#e78e3d] ">
            {' '}
            & lot of love
          </Text>
        </Text>
        <View className="flex-row items-center justify-between space-x-2 mt-2">
          
          <View className="flex gap-3">
            <Text className="font-bold text-[20px] ">Price - {'\u20B9' +" " +item.price}</Text>
          <View className=" flex flex-row items-center ">

            <View className="flex flex-row">{
            renderStars(4)
            }</View>
            <View>
              <Text>Ratings</Text>
            </View>
          </View>
          </View>
          <TouchableOpacity
            className="px-3 rounded-md py-2  cursor-pointer  bg-[#e78e3d]"
            onPress={() => {
              
              dispatch(addToCart(item))
            }}>
            <Text className="text-[19px]  text-white "> Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DishCard;
