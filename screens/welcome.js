import React from "react";
import { ImageBackground } from "react-native";
import { View, Heading, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button";

function Welcome() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/Welcome.png")}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Heading
          style={{
            bottom: 30,
            color: "white",
            letterSpacing: 4, // Menambahkan jarak antar huruf
            textShadowColor: "#262422", // Warna shadow
            textShadowOffset: { width: 3, height: 3 }, // Offset shadow
            textShadowRadius: 5, // Radius shadow
          }}
        >
          NUTRIFUD
        </Heading>

        <Image
          source={require("../assets/Logo.png")}
          w="200"
          h="200"
          alt="Logo Icon"
        />
        <View
          style={{
            position: "absolute",
            bottom: 70,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Button
            text="Let's Cook!"
            onPress={() => navigation.navigate('Tabs')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Welcome;
