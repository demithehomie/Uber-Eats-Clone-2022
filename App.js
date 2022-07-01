import * as React from "react";  
import { View, Text, SafeAreaView, ScrollView, } from "react-native";
import { Divider } from "react-native-elements"; 
import SearchBar from "./components/home/SearchBar.js";
import BottomTabs from "./components/home/BottomTabs.js";
import HeaderTabs from "./components/home/HeaderTabs.js";
import Categories from "./components/home/Categories.js";
import RestaurantItems, { localRestaurants } from "./components/home/RestaurantItems";
import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";
import {useEffect} from "react";
import RestaurantDetail from "./screens/RestaurantDetail.js";
import MenuItems from "./components/restaurantDetail/MenuItems.js";


export default function App() {
  
  
  return (
    /*
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }} >
      <View style={{ backgroundColor: "white", padding: 15 }} > 
      
      <HeaderTabs />
      <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems  />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
*/
  <View>
    <RestaurantDetail /> 
  </View>
  );
 
}
