import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const items = [

    {
        image: require('../assets/images/chinese-cuisine-logo.png'),
        text: "Chinese"
    },
    {
        image: require('../assets/images/japanese-cuisine-logo.png'),
        text: "Japanese"
    },
    {
        image: require('../assets/images/korean-cuisine-logo.png'),
        text: "Korean"
    },
    {
        image: require('../assets/images/fastfood-logo.png'),
        text: "Fast Food"
    }

]

export default function Categories() {
  return (
    <View
        style={{
            marginTop: 5,
            backgroundColor: "white",
            paddingVertical: 10,
            paddingLeft: 20
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
                <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                    <Image 
                        source={item.image}
                        style={{
                            width: 50,
                            height: 40,
                            resizeMode: "contain",
                        }}
                    />
                    <Text style={{ fontSize: 13, fontWeight:"900" }}>{item.text}</Text>
                </View>
            ))}  
        </ScrollView>
     </View>
  )
}