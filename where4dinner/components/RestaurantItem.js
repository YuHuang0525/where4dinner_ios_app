import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
        <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
            <RestaurantImage />
            <RestaurantInfo />
        </View>
    </TouchableOpacity>
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
        
        <View> 
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Noble Chef</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
        </View>

        <View
            style={{
            backgroundColor: "#82EEFD",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15
            }}
        >
            <Text>5.0</Text>
        </View>
    </View>
)