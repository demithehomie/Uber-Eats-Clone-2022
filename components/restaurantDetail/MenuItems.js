import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';


export const foods = [
    {
        title: "Blooming Onion",
        description: "The worldwide famous bloominh onion is on sale righw now",
        price: "R$ 0,50",
        
        image: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    },
    {
        title: "Big Burgo",
        description: "The best burguer in the whole world",
        price: "R$ 50,50",
    
        image: "https://diariodorio.com/wp-content/uploads/2018/10/Ribs-Double-Decker.jpg",
    },
    {
        title: "Blooming Onion",
        description: "The worldwide famous bloominh onion is on sale righw now",
        price: "R$ 0,50",
        
        image: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    },
    {
        title: "Blooming Onion",
        description: "The worldwide famous bloominh onion is on sale righw now",
        price: "R$ 0,50",
        
        image: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    },
    {
        title: "Blooming Onion",
        description: "The worldwide famous bloominh onion is on sale righw now",
        price: "R$ 0,50",
        
        image: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    },
    {
        title: "Big Burgo",
        description: "The best burguer in the whole world",
        price: "R$ 50,50",
    
        image: "https://diariodorio.com/wp-content/uploads/2018/10/Ribs-Double-Decker.jpg",
    },
    {
        title: "Blooming Onion",
        description: "The worldwide famous bloominh onion is on sale righw now",
        price: "R$ 0,50",
        
        image: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    },
    {
        title: "Blooming Onion",
        description: "The worldwide famous bloominh onion is on sale righw now",
        price: "R$ 0,50",
        
        image: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    },
];




const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
});

export default function MenuItems() {
    return (
        <View style={{
            backgroundColor: "#eee",
            height: screenHeight,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>    
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food}/>
                        <FoodImage food={food}/>
                     </View>
                     <Divider width={0.5}/>
                </View>
        ))}
        </ScrollView>
        </View>
    );
}

const screenHeight = Dimensions.get('window').height

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly", }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
        
    </View>

);

const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 20  }}
        />
    </View>
)