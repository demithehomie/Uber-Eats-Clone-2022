import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Divider } from "react-native-elements";

import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';


export default function RestaurantDetail ()  {
    return (
        <View style={{
           alignContent: "center",
            
            
        }}>
            <About/>
             <Divider width={1.8} style={{ marginVertical: 35 }} />
                
                    <MenuItems />
                
        </View>
    )

};