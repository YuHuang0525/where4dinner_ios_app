import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#FF6961", flex:1 }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <HeaderTabs />
        </View>
    </SafeAreaView>
    
    // <SafeAreaView>
    //   <HeaderTabs />
    // </SafeAreaView>
  );
}