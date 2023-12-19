import {View, Text, ActivityIndicator} from 'react-native';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Loader} from 'react-native-feather';
import {themeColors} from '../../Themes/ThemeColors';
import {useNavigation} from '@react-navigation/native';

const OrderPreparingScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>navigation.navigate("Delivery"),3000)
  },[])
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full px-5 ">
        <View className="flex-col justify-center items-center">
          <Text
            className="font-extrabold text-3xl tracking-widest text-center"
            style={{color: themeColors.text}}>
            Rukk ja bhai, Bann raha hai tera khaana !
          </Text>
          <ActivityIndicator
            size="large"
            color={themeColors.text}
            style={{transform: [{rotate: '45deg'}], marginTop: 40}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderPreparingScreen;
