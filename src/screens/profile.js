import { Text, Image, Box, View } from "native-base";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Button from "../components/button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { clearStorage, getData } from "../utils";
import FIREBASE from "../config/FIREBASE";

const Profile = ({ navigation, withBack = true }) => {
    const [profile, setProfile] = useState(null);

    const getUserData = () => {
        getData("user").then((res) => {
        const data = res;
        if (data) {
            console.log("isi data", data);
            setProfile(data);
        } else {
            // navigation.replace('Login');
        }
        });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
        getUserData();
        });

        return () => {
        unsubscribe();
        };
    }, [navigation]);

    const onSubmit = (profile) => {
        if (profile) {
        FIREBASE.auth()
            .signOut()
            .then(() => {
            // Sign-out successful.
            clearStorage();
            navigation.replace("Welcome");
            })
            .catch((error) => {
            // An error happened.
            alert(error);
            });
        } else {
            navigation.replace("Login");
        }
    };

    return (
    <>
    <Box position="absolute" top={45} left={5} zIndex={1}>
        {withBack && (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
        >
            <Ionicons name="arrow-back-outline" size={35} color="#ED7D31" />
        </TouchableOpacity>
        )}
    </Box>
    
      <View
        bg="#FFEEDC"
        flex={1}
        alignItems="center"
      >
        <Box 
          bg="white" 
          flex={1} 
          top={-200}
          borderBottomLeftRadius={180}
          borderBottomRightRadius={180}
          position= "absolute"
          overflow="hidden"
          paddingTop={200}
          mb={-30}
          >
        <Image
          source={require("../assets/zoro.png")}
          alt="Foto Profil"
          resizeMode="cover"
          flex={1}
         />
        </Box>

        <Box mt={470}>
            <Text
            fontSize={"xl"}
            alignSelf="center"
            fontWeight="bold"
            >
            Hello, Foodies!
            </Text>
        </Box>

        <Box flexDirection="column" mt={10} mb={10} mr={240}>
            <Box mb={5}>
                <Text color="black" fontSize={"sm"}>
                    Email
                </Text>
                <Text color="black" fontSize={"xl"} mt={"2"}>
                    {profile?.email}
                </Text>
            </Box>

            <Box mb={5}>
                <Text color="black" fontSize={"sm"}>
                    Nomor Ponsel
                </Text>
                <Text color="black" fontSize={"xl"} mt={"2"}>
                    {profile?.nohp}
                </Text>
            </Box>
        </Box>    

        <Box
            style={{
            position: "absolute",
            bottom: 40,
            width: "100%",
            alignItems: "center",
          }}
        >
            <Button
                text={profile ? "Logout" : "Login"}
                onPress={() => onSubmit(profile)}
            /> 
        </Box>   
      </View>
    </>
  );
};

export default Profile;