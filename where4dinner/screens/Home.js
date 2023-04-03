import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';

const YELP_API_KEY = "pJgoxwFOG_CuAoI5P-J-20p9EAtY5QJLjBnBUXe5bCt3uonHvDFSjQZRMDVoLoTTCuZIH8IAvzZq2BS5TKYKMa-EGTYV42z4bOJxCjBopXN1Z2l6REjQEtcgol8rZHYx"


export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  
  const getRestaurntsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=San+Diego%2C+CA"
  

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`    
      },
    }

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setRestaurantData(json.businesses))

  }

  useEffect(() => {
    getRestaurntsFromYelp();
  }, [])
  

  return (
    <SafeAreaView style={{ backgroundColor: "#82EEFD", flex:1 }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantData={restaurantData} />
        </ScrollView>
    </SafeAreaView>
    
    // <SafeAreaView>
    //   <HeaderTabs />
    // </SafeAreaView>
  );
}