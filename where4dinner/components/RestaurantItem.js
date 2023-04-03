import { View, Text, Image} from 'react-native'
import React from 'react'

export default function RestaurantItem() {
  return (
    <View>
        <RestaurantImage />
        <RestaurantInfo />
    </View>
  )
}

const RestaurantImage = () => (
    <Image
        source={{
            uri: "https://media-cdn.tripadvisor.com/media/photo-s/10/dd/41/93/noble-chef.jpg"
        }}
        style={{ width: "100%", height: 200 }}
    />
)

const RestaurantInfo = () => (
    <View 
        style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginTop: 10}}>
        <Text>Noble Chef</Text>
        <Text>30-45 min</Text>
        <Text>5.0</Text>
    </View>
)