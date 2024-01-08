// import { Text, Image, Box, View, HStack } from "native-base";
// import Button from "../components/button";
// import React, { useState, useEffect } from "react";
// import { TouchableOpacity, ScrollView } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { clearStorage, getData, checkAsyncStorage } from "../utils";
// import { useNavigation } from "@react-navigation/native";
// import FIREBASE from "../config/FIREBASE";

// const Profile = ({ navigation, withBack = true }) => {
//     const [profile, setProfile] = useState(null);

//     const getUserData = () => {
//         getData("user").then((res) => {
//             const data = res;
//             if (data) {
//                 console.log("isi data", data);
//                 checkAsyncStorage('profile');
//                 setProfile(data);
//             } else {
//                 // navigation.replace('Login');
//             }
//         });
//     };

//     useEffect(() => {
//         const unsubscribe = navigation.addListener("focus", () => {
//             getUserData();
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, [navigation]);

//     const onSubmit = (profile) => {
//         if (profile) {
//             FIREBASE.auth()
//                 .signOut()
//                 .then(() => {
//                     // Sign-out successful.
//                     clearStorage();
//                     checkAsyncStorage('logoutProfile');
//                     setProfile(null); // Perbarui state profile setelah logout.
//                     navigation.replace("Welcome");
//                 })
//                 .catch((error) => {
//                     // An error happened.
//                     alert(error);
//                 });
//         } else {
//             console.log('Profile is null');
//             navigation.replace("Login");
//         }
//     };

//     return (
//         <>
//             <Box position="absolute" top={60} left={5} zIndex={1}>
//                 {withBack && (
//                     <TouchableOpacity
//                         activeOpacity={0.5}
//                         onPress={() => navigation.goBack()}
//                     >
//                         <Ionicons name="arrow-back-outline" size={35} color={"white"} />
//                     </TouchableOpacity>
//                 )}
//             </Box>

//             <ScrollView flex={1} backgroundColor="#FFEEDC">
//                 <View backgroundColor="#FFEEDC">
//                     <Box
//                         width={"100%"}
//                         height={220}
//                         backgroundColor={"white"}
//                     >
//                         <Image
//                             source={require("../assets/cover.png")}
//                             resizeMode={"cover"}
//                             width={"100%"}
//                             height={"100%"}
//                             alt="cover"
//                         />
//                     </Box>
//                     <Box alignItems={"center"} flex={1}>
//                         <Box
//                             backgroundColor={"white"}
//                             width={230}
//                             height={230}
//                             borderRadius={120}
//                             marginTop={-130}>
//                             {profile && profile.profileImage ? (
//                                 // Menampilkan gambar yang diambil dari data pengguna
//                                 <Image
//                                     source={{ uri: profile.profileImage }}
//                                     width={230}
//                                     height={230}
//                                     borderRadius={120}
//                                     resizeMode="cover"
//                                     flex={1}
//                                 />
//                             ) : (
//                                 // Menampilkan gambar profil default dari asset
//                                 <Image
//                                     source={require("../assets/profile.png")}
//                                     width={230}
//                                     height={230}
//                                     borderRadius={120}
//                                     resizeMode="cover"
//                                     flex={1}
//                                     alt="profile"
//                                 />
//                             )}

//                         </Box>

//                         <Text
//                             fontSize={"xl"}
//                             alignSelf={"center"}
//                             fontWeight={"bold"}
//                             padding={7}
//                         >
//                             Hello, {profile?.nama}
//                         </Text>

//                         <Box
//                             alignSelf={"center"}
//                             justifyContent={"center"}
//                             backgroundColor={"white"}
//                             width={"85%"}
//                             padding={6}
//                             borderRadius={10}
//                             shadowOpacity={10}
//                             elevation={15}
//                             mb={5}>
//                             <HStack alignItems={"center"} space={4}>
//                                 <Ionicons name="mail-outline" size={35} color={"#F15A24"} />
//                                 <Text> {profile?.email} </Text>
//                             </HStack>
//                         </Box>

//                         <Box
//                             alignSelf={"center"}
//                             justifyContent={"center"}
//                             backgroundColor={"white"}
//                             width={"85%"}
//                             padding={6}
//                             borderRadius={10}
//                             shadowOpacity={10}
//                             elevation={15}
//                             mb={5}>
//                             <HStack alignItems={"center"} space={4}>
//                                 <Ionicons name="call-outline" size={35} color={"#F15A24"} />
//                                 <Text> {profile?.nohp} </Text>
//                             </HStack>
//                         </Box>

//                         <Box
//                             mt={10}
//                             width={"100%"}
//                             alignItems={"center"}>
//                             <Button
//                                 text="Edit Profile"
//                                 onPress={() => navigation.navigate('EditProfile')}
//                             />
//                         </Box>

//                         <Box
//                             mt={4}
//                             width={"100%"}
//                             alignItems={"center"}>
//                             <Button
//                                 text={profile ? "Logout" : "Login"}
//                                 onPress={() => onSubmit(profile)}>
//                             </Button>
//                         </Box>
//                     </Box>
//                 </View>
//             </ScrollView>
//         </>
//     );
// };

// export default Profile;

import { Text, Image, Box, View, HStack } from "native-base";
import Button from "../components/button";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { clearStorage, getData, checkAsyncStorage } from "../utils";
import { useNavigation } from "@react-navigation/native";
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
                    setProfile(null); // Perbarui state profile setelah logout.
                    navigation.replace("Welcome");
                })
                .catch((error) => {
                    // An error happened.
                    alert(error);
                });
        } else {
            console.log('Profile is null');
            navigation.replace("Login");
        }
    };

    return (
        <>
            <Box position="absolute" top={60} left={5} zIndex={1}>
                {withBack && (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back-outline" size={35} color={"white"} />
                    </TouchableOpacity>
                )}
            </Box>

            <ScrollView flex={1} backgroundColor="#FFEEDC">
                <View backgroundColor="#FFEEDC">
                    <Box
                        width={"100%"}
                        height={220}
                        backgroundColor={"white"}
                    >
                        <Image
                            source={require("../assets/cover.png")}
                            resizeMode={"cover"}
                            width={"100%"}
                            height={"100%"}
                            alt="cover"
                        />
                    </Box>
                    <Box alignItems={"center"} flex={1}>
                        <Box
                            backgroundColor={"white"}
                            width={230}
                            height={230}
                            borderRadius={120}
                            marginTop={-130}>
                            {profile && profile.profileImage ? (
                                // Menampilkan gambar yang diambil dari data pengguna
                                <Image
                                    source={{ uri: profile.profileImage }}
                                    width={230}
                                    height={230}
                                    borderRadius={120}
                                    resizeMode="cover"
                                    flex={1}
                                />
                            ) : (
                                // Menampilkan gambar profil default dari asset
                                <Image
                                    source={require("../assets/profile.png")}
                                    width={230}
                                    height={230}
                                    borderRadius={120}
                                    resizeMode="cover"
                                    flex={1}
                                    alt="profile"
                                />
                            )}

                        </Box>

                        <Text
                            fontSize={"xl"}
                            alignSelf={"center"}
                            fontWeight={"bold"}
                            padding={7}
                        >
                            Hello, {profile?.nama}
                        </Text>

                        <Box
                            alignSelf={"center"}
                            justifyContent={"center"}
                            backgroundColor={"white"}
                            width={"85%"}
                            padding={6}
                            borderRadius={10}
                            shadowOpacity={10}
                            elevation={15}
                            mb={5}>
                            <HStack alignItems={"center"} space={4}>
                                <Ionicons name="mail-outline" size={35} color={"#F15A24"} />
                                <Text> {profile?.email} </Text>
                            </HStack>
                        </Box>

                        <Box
                            alignSelf={"center"}
                            justifyContent={"center"}
                            backgroundColor={"white"}
                            width={"85%"}
                            padding={6}
                            borderRadius={10}
                            shadowOpacity={10}
                            elevation={15}
                            mb={5}>
                            <HStack alignItems={"center"} space={4}>
                                <Ionicons name="call-outline" size={35} color={"#F15A24"} />
                                <Text> {profile?.nohp} </Text>
                            </HStack>
                        </Box>

                        <Box
                            mt={10}
                            width={"100%"}
                            alignItems={"center"}>
                            <Button
                                text="Edit Profile"
                                onPress={() => navigation.navigate('EditProfile')}
                            />
                        </Box>

                        <Box
                            mt={4}
                            width={"100%"}
                            alignItems={"center"}>
                            <Button
                                text={profile ? "Logout" : "Login"}
                                onPress={() => onSubmit(profile)}>
                            </Button>
                        </Box>
                    </Box>
                </View>
            </ScrollView>
        </>
    );
};

export default Profile;