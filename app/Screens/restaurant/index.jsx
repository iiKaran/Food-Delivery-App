import { View, Text,Linking,Button } from 'react-native'
import React from 'react'

const Restaurant = () => {
  return (
    <View>
      <Text className="">Restaurant</Text>
      <Button
    title="Visit Google"
    onPress={() => Linking.openURL('https://www.google.com')}
  />
    </View>
  )
}

export default Restaurant