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
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import {themeColors} from '../../Themes/ThemeColors';
import Categories from './Components/Categories';
import {MenuItems} from '../../Constants';
import FeaturedRow from './Components/FeaturedRow';
import DishCard from './Components/DishCard';
import ViewCartBtn from './Components/ViewCartBtn';
import {ShoppingCart} from 'react-native-feather';
import {categories} from '../../Constants';
import {Phone} from 'react-native-feather';
import {useSelector} from 'react-redux';
import {addToCart} from '../../Redux/Slices/cartSlice';
const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [currDishes, setDishes] = useState(null);
  const cartItems = useSelector(state => state.cart.items);
  const [isActiveSub, setisActiveSub] = useState(1);
  useEffect(() => {
    setDishes(MenuItems[0]);
    {activeCategory===1? setDishes(categories[0].subCat[0].Items):''}
  }, []);
  function setCat(cat) {
    setActiveCategory(cat);
    setDishes(MenuItems[cat - 1]);

    return;
  }

  const handlePress = () => {
    Linking.openURL(`tel:${6280954458}`);
  };

  return (
    <SafeAreaView className="bg-white text-black flex-1">
      <StatusBar barStyle="dark-content"></StatusBar>
      {/* Search Bar */}
      <View className="flex-row items-center justify-between   px-3 h-[20vh] pb-2">
        <Image
          className="w-[100px] h-[120px] rounded-full"
          source={{
            uri: 'https://thumbs.dreamstime.com/b/plate-fork-spoon-restaurant-logo-white-background-eps-plate-fork-spoon-restaurant-logo-193685698.jpg',
          }}
        />
        <View className="flex flex-row gap-2 ">
          <TouchableOpacity
            className="px-3 rounded-md py-2  cursor-pointer  "
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <View>
              <ShoppingCart stroke={'black'} fontSize={'120px'}></ShoppingCart>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-md py-2 px-3  cursor-pointer  "
            onPress={handlePress}>
            <View>
              <Phone stroke={'black'} fontSize={'120px'}></Phone>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* main area */}

      {/* categories */}
      <Categories setActiveCategory={setCat} activeCategory={activeCategory} />
      
      {activeCategory === 1 && (
        <View className="flex flex-row gap-4 items-center justify-center mt-5 ">
          <FlatList
            data={categories[0].subCat}
            renderItem={({item}) => (
              <TouchableOpacity className="ml-4 " onPress={()=>{
                setisActiveSub(item.id);
                setDishes(categories[0].subCat[item.id-1].Items)
              }}>
                <Text
                  className={`font-bold  px-2 py-2 bg-slate-200 rounded-lg ${
                    isActiveSub == item.id ? 'bg-orange-400 underline' : ''
                  }`}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            horizontal={true}
            // contentContainerStyle={{ paddingBottom: 160 }}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      { (
        <View className="flex-1">
          <FlatList
            data={currDishes}
            renderItem={({item}) => <DishCard item={item} />}
            horizontal={false}
            // contentContainerStyle={{ paddingBottom: 160 }}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      <ViewCartBtn active={cartItems.length > 0 ? true : false}></ViewCartBtn>
    </SafeAreaView>
  );
};

export default HomeScreen;
