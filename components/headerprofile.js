import React from "react";
import { SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { Box } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderProfile = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView>
        <ImageBackground
          source={require("../assets/HP.png")}
          style={{ width: windowWidth, height: windowHeight * 0.13, alignItems: "center" }}
        >
        <Box position="center" bottom={-28}> 
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Profile")}
            >
              <Ionicons name="person-circle-outline" size={50} color="#F15A24"/>
            </TouchableOpacity>
        </Box>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default HeaderProfile;


