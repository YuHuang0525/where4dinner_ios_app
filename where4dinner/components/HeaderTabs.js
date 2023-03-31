import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("View Wait Time")
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <HeaderButton
            Text="View Wait Time"
            btnColor="black"
            textColor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <HeaderButton
            Text="Enter Wait Time"
            btnColor="white"
            textColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
    </View>
  )
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab == props.Text ? "orange":"white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 40
        }}
        onPress={() => props.setActiveTab(props.Text)}    
    >
        <Text
            style={{
            color: props.activeTab == props.Text ? "white":"orange",
            fontSize: 15,
            fontWeight: "900"
        }}
        >{props.Text}</Text>
    </TouchableOpacity>
);