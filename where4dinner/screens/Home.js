import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#82EEFD", flex:1 }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <Categories />
    </SafeAreaView>
    
    // <SafeAreaView>
    //   <HeaderTabs />
    // </SafeAreaView>
  );
}