import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const image = "https://s3.amazonaws.com/institucional-statics-files/site/uploads/22_Jackaroo-Ribs-n-Steak.jpg";

const title = 'Outback Steakhouse';

const description = '· Steakhouse · Comfort Food · $$$ ·  ';

export default function About (){
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    )

};

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%" , height: 180 }} />
);

const RestaurantTitle = (props) => (
    <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 10, marginHorizontal: 15, }}>{props.title}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={{ fontSize: 15, marginHorizontal: 20, }}>{props.description}</Text>
)
