import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\shopping-bag.png"),
        text: "Retirada",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\soft-drink.png"),
        text: "Bebidas Leves",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\bread.png"),
        text: "Padaria",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\fast-food.png"),
        text: "Fast-Food",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\deals.png"),
        text: "Mercado",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\coffee.png"),
        text: "Cafézinho",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\desserts.png"),
        text: "Sobremesas",
    },
    
    
];

export default function Categories () {
    return (
        <View style={{
            marginTop: 5,
            paddingVertical: 20,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: "#fff", 
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            
            {items.map((item, index) => (
            <View key={index} style={{ padding: 10, alignItems: "center"}}>
            <Image 
                source={item.image} 
                style={{
                    width: 50,
                    height: 40,
                    resizeMode: "contain",
                }}
            
            />
            <Text style={{ fontSize: 13, fontWeight: "900", }}>{item.text}</Text>
            </View>
         
            ))}
        </ScrollView>
        </View>
    );
}