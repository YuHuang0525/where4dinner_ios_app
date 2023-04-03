import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#82EEFD", flex:1 }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItem />
        </ScrollView>
    </SafeAreaView>
    
    // <SafeAreaView>
    //   <HeaderTabs />
    // </SafeAreaView>
  );
}