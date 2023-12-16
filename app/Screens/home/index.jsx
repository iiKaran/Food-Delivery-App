import {View, Text, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text className="">HomeScreen</Text>
        <Button
          title="Restaurant"
          onPress={() => navigation.navigate('Restaurant')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
