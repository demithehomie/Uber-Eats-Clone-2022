import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar () {
    return (
    <View style={{ marginTop: 15, marginBottom: 15, flexDirection: "row", paddingLeft: 17, paddingRight: 17, }}>
        <GooglePlacesAutocomplete 
            query={{key: "AIzaSyA-2W5RAMDuOKmz2IEdIL5Jz0MpLHmws5w"}}
            placeholder="Onde você está?"
            styles={{
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    paddingLeft: 15,
                    fontWeight: "700",
                    marginTop: 7,
                },
                textInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginItems: 10,
                },
            }}
            renderLeftButton={() => (
                <View style={{ marginLeft: 15}}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )} 
            renderRightButton={() => (
                <View style={{ 
                    flexDirection: "row",
                    marginRight: 18,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 20,
                    alignItems: "center",
                    }}>
                    <AntDesign 
                        name="clockcircle" 
                        size={11}
                        style={{ marginRight: 5}}
                        />
                    <Text>Procurar</Text>
                </View>

            )}
            />
    </View>
    
    );
}


