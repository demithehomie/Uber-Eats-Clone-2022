import * as React from "react";

import { Button, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";

const bottombuttons = [
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\homelogo.png"),
        text: "Home",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\glass.png"),
        text: "Pesquisar",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\bag.png"),
        text: "Loja",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\paper.png"),
        text: "Pedidos",
    },
    {
        image: require("C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\magidi\\MVP - REACT - UE STYLE\\mvpues3\\assets\\images\\userr.png"),
        text: "Conta",
    },
    
]

export default function BottomTabs () {
    return (
        <View style={{
            backgroundColor: "#eee",
            flexDirection: "row",
            marginHorizontal: 15,
            paddingBottom: 30,
            justifyContent: "space-between",
        }}>
            
            {bottombuttons.map((item, index) => (
                
                <View key={index} style={{ padding: 10, alignItems: "center" }}>
                    
                    <Image source={item.image} style={{
                        resizeMode: "contain",
                        width: 40,
                        height: 30,
                        
                    }}/>
                    
                    <Text style={{ fontSize: 15, fontWeight: "normal", }}>{item.text}</Text>
                    
                </View>
               
            ))}
          
        </View>
    );
}