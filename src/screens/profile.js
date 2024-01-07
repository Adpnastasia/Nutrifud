import { Button, Text, Image, Box, View } from "native-base";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { clearStorage, getData, checkAsyncStorage } from "../utils";
import FIREBASE from "../config/FIREBASE";

const Profile = ({ navigation, withBack = true }) => {
    const [profile, setProfile] = useState(null);

    const getUserData = () => {
        getData("user").then((res) => {
            const data = res;
            if (data) {
                console.log("isi data", data);
                checkAsyncStorage('profile');
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
                    checkAsyncStorage('logoutProfile');
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
                    top={-100}
                    borderBottomLeftRadius={180}
                    borderBottomRightRadius={180}
                    overflow="hidden"
                    paddingTop={125}
                    mb={-30}
                >
                    <Image
                        source={require("../assets/zoro.png")}
                        alt="Foto Profil"
                        resizeMode="cover"
                        flex={1}
                    />
                </Box>

                <Box mt={-10}>
                    <Text
                        fontSize={"xl"}
                        alignSelf="center"
                        fontWeight="bold"
                    >
                        Hello, Foodies!
                    </Text>
                </Box>


                <Box flexDirection="column" mt={10} mb={10} ml={-170}>
                    <Box mb={5}>
                        <Text color="black" fontSize={"sm"}>
                            Nama
                        </Text>
                        <Text color="black" fontSize={"xl"} mt={"2"}>
                            {profile?.nama}
                        </Text>
                    </Box>

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

                <Button
                    children={profile ? "Logout" : "Login"}
                    variant="unstyled"
                    padding={"3"}
                    bg={'#F15A24'}
                    mb={10}
                    w={'5/6'}
                    borderRadius={'full'}
                    onPress={() => onSubmit(profile)}>
                </Button>

            </View>
        </>
    );
};

export default Profile;