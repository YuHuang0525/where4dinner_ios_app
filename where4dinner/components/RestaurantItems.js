import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export const localRestaurants = [
    {
        name: "Noble Chef",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/10/dd/41/93/noble-chef.jpg",
        categories: ["Chinese"],
        price: "$$",
        reviews: 1244,
        rating: 5.0
    },
    {
        name: "Eastern Dynasty",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/10/dd/41/93/noble-chef.jpg",
        categories: ["Chinese"],
        price: "$$",
        reviews: 1244,
        rating: 4.5
    },
    {
        name: "Noble Chef",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/10/dd/41/93/noble-chef.jpg",
        categories: ["Chinese"],
        price: "$$",
        reviews: 1244,
        rating: 5.0
    }
] 


export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 13 }}>
        {props.restaurantData.map((restaurant, index) => (
            <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                <RestaurantImage image={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
            </View>   
        ))}
    </TouchableOpacity>
  )
}

const RestaurantImage = (props) => (
    <Image
        source={{
            uri: props.image
        }}
        style={{ width: "100%", height: 200 }}
    />
)

const RestaurantInfo = (props) => (
    <View 
        style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginTop: 10}}>
        
        <View> 
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
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
            <Text>{props.rating}</Text>
        </View>
    </View>
)