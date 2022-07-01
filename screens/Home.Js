import * as React from "react";
import { StyleSheet, Platform, StatusBar, View, Text, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\components\\SearchBar.js";
import HeaderTabs from "C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\components\\HeaderTabs";
import Categories from "C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\components\\Categories.js";
import RestaurantItems, { localRestaurants } from "C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\components\\RestaurantItems.js";


export default function App() {
  
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}} >
      <View style={{ backgroundColor: "white", padding: 15, }} > 
      <HeaderTabs />
      <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  );
}
