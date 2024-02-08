import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert, 
  FlatList, 
  
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import {themeColors} from '../../Themes/ThemeColors';
import Categories from './Components/Categories';
import { MenuItems } from '../../Constants';
import FeaturedRow from './Components/FeaturedRow';
import DishCard from './Components/DishCard';
import ViewCartBtn from './Components/ViewCartBtn';
import { ShoppingCart } from 'react-native-feather';
const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [currDishes,setDishes]= useState(null);

  useEffect(()=>{
     
    setDishes(MenuItems[0])
    
  },[])
  function setCat(cat)
  {
    setActiveCategory(cat);
    setDishes(MenuItems[cat-1])
    
    return ;
  }
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content"></StatusBar>
      {/* Search Bar */}
      <View className="flex-row items-center justify-between  space-x-1 px-4 h-[20vh] pb-2">
      <Image className="w-[100px] h-[120px] rounded-full" source={{uri: 'https://thumbs.dreamstime.com/b/plate-fork-spoon-restaurant-logo-white-background-eps-plate-fork-spoon-restaurant-logo-193685698.jpg'}} />
      
      <TouchableOpacity className="px-3 rounded-md py-2  cursor-pointer  " onPress={()=>{
      }}>
        <View>
          <ShoppingCart stroke={"black"} fontSize={"large"}></ShoppingCart>
        </View>
      </TouchableOpacity>
      </View>
      {/* main area */}
      
        
        {/* categories */}
        <Categories   setActiveCategory={setCat} activeCategory={activeCategory}/>
        <View className="flex-1">
        <FlatList
        data={currDishes}
        renderItem={({item}) => <DishCard item={item} />}
        horizontal={false}
        // contentContainerStyle={{ paddingBottom: 160 }}
        keyExtractor={item => item.id}
      />
        </View>

     <ViewCartBtn active={true}></ViewCartBtn>
    </SafeAreaView>

  );
};

export default HomeScreen;
