import React from "react";
import { View, Text, Image, TouchableOpacity, props } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
     
export const localRestaurants = [
    {
    name: "Delivery dos Amigos",
    image_url: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg",
    categories: ["Hamburguer", "Açai"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
},
{
    name: "Outback",
    image_url: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    categories: ["Steakhouse", "Churrascaria"],
    price: "$$",
    reviews: 725,
    rating: 5.0,
},
{
    name: "Delivery dos Amigos",
    image_url: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg",
    categories: ["Hamburguer", "Açai"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
},
{
    name: "Outback",
    image_url: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    categories: ["Steakhouse", "Churrascaria"],
    price: "$$",
    reviews: 725,
    rating: 5.0,
},
{
    name: "Delivery dos Amigos",
    image_url: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg",
    categories: ["Hamburguer", "Açai"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
},
{
    name: "Outback",
    image_url: "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_outback_steakhouse.jpg?quality=70&strip=info",
    categories: ["Steakhouse", "Churrascaria"],
    price: "$$",
    reviews: 725,
    rating: 5.0,
},
]



export default function RestaurantItems() {
    return (
    <View style={{ marginBottom: 30, borderRadius: 15, }}>
    {localRestaurants.map ((restaurant, index) => (
    <View 
        key={index}
        style={{ marginTop: 10, padding: 17, }}>
            <TouchableOpacity>   
                <RestaurantImage image={restaurant.image_url} /> 
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </TouchableOpacity>
    </View>
    ))}
    </View>
    );
  }

  const RestaurantImage  = (props) => (
    <>
    <Image
        source={{
            uri: props.image,
        }}
        style={{ width: "100%", height: 180, borderRadius: 15 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 17, top: 17 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />   
        </TouchableOpacity>

    </>
  );

  const RestaurantInfo = (props) => (
      <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            
           
        }}>
          <View>
          <Text style={{ fontWeight: "bold", fontSize: 16, }}>{props.name}</Text>
          <Text style={{ fontSize: 13, color: "gray", }}>20-30 . min</Text>
          </View>
          
          <View style={{
              backgroundColor: "#eee",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              
          }}>
          <Text>{props.rating}</Text>
         </View>
      </View>
  )