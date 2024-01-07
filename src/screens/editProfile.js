// import { Image, Box, View, HStack, FormControl, Input, Modal, Text } from "native-base";
// import Button from "../components/button";
// import React, { useState, useEffect } from "react";
// import { TouchableOpacity, ScrollView } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { setData, getData, checkAsyncStorage } from "../utils";
// import { useNavigation } from "@react-navigation/native";
// import FIREBASE from "../config/FIREBASE";
// import * as ImagePicker from "expo-image-picker";

// const EditProfile = ({ route, navigation, withBack = true }) => {
//     const [profile, setProfile] = useState(null);
//     const [image, setImage] = useState(null);
//     const [userData, setUserData] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [email, setEmail] = useState(route.params?.email || '');
//     const [nohp, setNohp] = useState(route.params?.nohp || '');
    // const [nama, setNama] = useState(route.params?.nama || '');
//     const [showAlert, setShowAlert] = useState(false);
//     const [alertMessage, setAlertMessage] = useState('');

//     const toggleAlert = (message) => {
//         setShowAlert(!showAlert);
//         setAlertMessage(message);
//     };

    // const pickImage = async () => {
    //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    //     if (status !== 'granted') {
    //         alert('Izin untuk mengakses perpustakaan media ditolak');
    //         return;
    //     }

    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [3, 3],
    //         quality: 1,
    //     });

    //     if (!result.cancelled && result.assets.length > 0) {
    //         const selectedImage = result.assets[0];
    //         const source = { uri: selectedImage.uri };
    //         console.log('Source:', source);
    //         setImage(source);
    //     } else {
    //         console.log('Pemilihan gambar dibatalkan atau tidak ada gambar yang dipilih');
    //     }
    // };

    // const uploadImage = async () => {
    //     setUploading(true);
    
    //     try {
    //         if (!image) {
    //             throw new Error('Image is not selected.');
    //         }
    
    //         const response = await fetch(image.uri);
    //         const blob = await response.blob();
    //         const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
    
    //         // Upload gambar ke Firebase Storage
    //         const ref = FIREBASE.storage().ref().child(filename);
    //         await ref.put(blob);
    
    //         // Mendapatkan URL gambar dari Firebase Storage
    //         const downloadURL = await ref.getDownloadURL();
    
    //         // Set the downloaded URL in the user data
    //         const updatedUserData = { ...userData, profileImage: downloadURL };
    //         await setData('user', updatedUserData);
    
    //         // Update the user data in the Realtime Database
    //         const user = FIREBASE.auth().currentUser;
    //         if (user) {
    //             await FIREBASE.database().ref(`users/${user.uid}`).update({
    //                 profileImage: downloadURL,
    //             });
    //         }
    
    //         setUploading(false);
    //         setImage(null);
    
    //         // Memperbarui data profil setelah gambar diunggah
    //         getUserData();
    //     } catch (error) {
    //         console.log('Error uploading image:', error.message);
    //         setUploading(false);
    //         alert(error.message);
    //     }
    // };    

//     const getUserData = () => {
//         getData("user").then((res) => {
//             const data = res;
//             if (data) {
//                 console.log("isi data", data);
//                 checkAsyncStorage('profile');
//                 setProfile(data);
//                 setUserData(data); // Save user data in state for later use
//             } else {
//                 // navigation.replace('Login');
//             }
//         });
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//               const profile = await getData('user'); // Replace with your Firebase fetch function
//               if (profile) {
//                 setEmail(profile.email || '');
//                 setNohp(profile.nohp || '');
//                 setNama(profile.nama|| '');
//               } else {
//                 toggleAlert('User data not available');
//               }
//             } catch (error) {
//               console.error('Error fetching profile:', error.message);
//               toggleAlert('Error fetching profile');
//             }
//           };
        
//         const unsubscribe = navigation.addListener('focus', fetchData);

//         return () => {
//             unsubscribe();
//         };
//     }, [navigation]);

//     const onEditProfile = async () => {
//         try {
//             const user = FIREBASE.auth().currentUser;

//             console.log('Data sebelum update:', { email, nohp, nama });

//             if (user && email !== '' && nohp !== '' && nama !== '') {
//                 const updatedData = {
//                     email: email,
//                     nohp: nohp,
//                     nama: nama,
//             };
    
//             // Update user data in Firebase Realtime Database
//             await FIREBASE.database().ref(`users/${user.uid}`).update(updatedData);

//             // Memperbarui data profil setelah berhasil mengedit
//             getUserData();

//             // Navigate to the 'Profile' screen after successful update
//             navigation.replace('Profile');
//           } else {
//                 console.log('Data tidak lengkap - Email:', email, 'NoHP:', nohp, 'Nama:', nama);
//                 toggleAlert('Data tidak lengkap');
//           }
//         } catch (error) {
//             console.error('Error editing profile:', error.message);
//             toggleAlert('Error editing profile');
//         }
//       };

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
//                       width={"100%"}
//                       height={220}
//                       backgroundColor={"white"}
//                       >
//                           <Image
//                             source={require("../assets/cover.png")}
//                             resizeMode={"cover"}
//                             width={"100%"}
//                             height={"100%"}
//                             alt="cover"
//                         />
//                     </Box>
//                     <Box alignItems={"center"} flex={1}>
//                         <Box 
//                           backgroundColor={"white"}
//                           width={230}
//                           height={230}
//                           borderRadius={120}
//                           marginTop={-130}>
                            // {image ? (
                            //     <Image
                            //         source={image}
                            //         width={230}
                            //         height={230}
                            //         borderRadius={120}
                            //         resizeMode="cover"
                            //         flex={1}
                            //     />
                            // ) : profile && profile.profileImage ? (
                            //     <Image
                            //         source={{ uri: profile.profileImage }}
                            //         width={230}
                            //         height={230}
                            //         borderRadius={120}
                            //         resizeMode="cover"
                            //         flex={1}
                            //         alt="profile"
                            //     />
                            // ) : (
                            //     <Image
                            //         source={require("../assets/profile.png")}
                            //         width={230}
                            //         height={230}
                            //         borderRadius={120}
                            //         resizeMode="cover"
                            //         flex={1}
                            //         alt="profile"
                            //     />
                            // )}

//                             <Box 
//                               backgroundColor={"white"} 
//                               width={70}
//                               height={70}
//                               borderRadius={100}
//                               position={"absolute"}
//                               right={-4}
//                               alignItems={"center"}
//                               justifyContent={"center"}>
//                                 <TouchableOpacity onPress={pickImage}>
//                                     <Ionicons name="create-outline" size={35} color={"#F15A24"}/>
//                                 </TouchableOpacity>
//                             </Box>
//                         </Box>

//                         <FormControl mt={5}>
                            // <Box
                            // alignSelf={"center"}
                            // justifyContent={"center"}
                            // backgroundColor={"white"}
                            // width={"85%"}
                            // padding={6}
                            // borderRadius={10}
                            // shadowOpacity={10}
                            // elevation={15}
                            // mb={5}>
                            //     <HStack alignItems={"center"} space={4}>
                            //         <Ionicons name="person-outline" size={35} color={"#F15A24"}/>
                            //         <Input
                            //           placeholder="Your Name"
                            //           value={nama}
                            //           onChangeText={(text) => setNama(text)}
                            //           bgColor='white'
                            //           borderRadius={15}
                            //           width={220} 
                            //         />
                            //     </HStack>
                            // </Box>

//                             <Box
//                             alignSelf={"center"}
//                             justifyContent={"center"}
//                             backgroundColor={"white"}
//                             width={"85%"}
//                             padding={6}
//                             borderRadius={10}
//                             shadowOpacity={10}
//                             elevation={15}
//                             mb={5}>
//                                 <HStack alignItems={"center"} space={4}>
//                                     <Ionicons name="mail-outline" size={35} color={"#F15A24"}/>
//                                     <Input
//                                       placeholder="Your Email"
//                                       value={email}
//                                       onChangeText={(text) => setEmail(text)}
//                                       bgColor='white'
//                                       borderRadius={15}
//                                       width={220} 
//                                     />
//                                 </HStack>
//                             </Box>

//                             <Box
//                             alignSelf={"center"}
//                             justifyContent={"center"}
//                             backgroundColor={"white"}
//                             width={"85%"}
//                             padding={6}
//                             borderRadius={10}
//                             shadowOpacity={10}
//                             elevation={15}
//                             mb={3}>
//                                 <HStack alignItems={"center"} space={4}>
//                                     <Ionicons name="call-outline" size={35} color={"#F15A24"}/>
//                                     <Input
//                                       placeholder="Your Phone"
//                                       value={nohp}
//                                       onChangeText={(text) => setNohp(text)}
//                                       bgColor='white'
//                                       borderRadius={15}
//                                       width={220} 
//                                     />
//                                 </HStack>
//                             </Box>
//                         </FormControl>

//                         <Box
//                           mt={5}
//                           width={"100%"}
//                           alignItems={"center"}>
//                             <Button
//                               text="Upload Profile Picture"
//                               onPress={uploadImage}
//                             />
//                         </Box>

//                         <Box
//                           mt={4}
//                           mb={6}
//                           width={"100%"}
//                           alignItems={"center"}>
//                             <Button
//                               text="Update"
//                               onPress={onEditProfile}>
//                             </Button>
//                         </Box>

//                         {/* show Alert */}
//                         {showAlert && (
//                             <Modal isOpen={showAlert} onClose={toggleAlert}>
//                                 <Box mx={4} p={4} bg="red.500" rounded="md">
//                                     <Text fontWeight="bold" color="white">Error!</Text>
//                                     <Text color="white">{alertMessage}</Text>
//                                 </Box>
//                             </Modal>
//                         )}

//                     </Box>
//                 </View>
//             </ScrollView>
//         </>
//     );
// };

// export default EditProfile;

import { Text, Image, Box, View, Alert, HStack, FormControl, Input, Modal, ModalBackdrop } from "native-base";
import Button from "../components/button";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView, AlertText } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { setData, getData, checkAsyncStorage } from "../utils";
import { useNavigation } from "@react-navigation/native";
import FIREBASE from "../config/FIREBASE";
import * as ImagePicker from "expo-image-picker";

const EditProfile = ({ route, navigation, withBack = true }) => {
    const [profile, setProfile] = useState(null);
    const [image, setImage] = useState(null);
    const [userData, setUserData] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [email, setEmail] = useState(route.params?.email || '');
    const [nohp, setNohp] = useState(route.params?.nohp || '');
    const [nama, setNama] = useState(route.params?.nama || '');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (status !== 'granted') {
            alert('Izin untuk mengakses perpustakaan media ditolak');
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });
    
        if (!result.cancelled && result.assets.length > 0) {
            const selectedImage = result.assets[0];
            const source = { uri: selectedImage.uri };
            console.log('Source:', source);
            setImage(source);
        } else {
            console.log('Pemilihan gambar dibatalkan atau tidak ada gambar yang dipilih');
        }
    };
    

    const uploadImage = async () => {
        setUploading(true);
    
        try {
            if (!image) {
                throw new Error('Image is not selected.');
            }
    
            const response = await fetch(image.uri);
            const blob = await response.blob();
            const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
    
            // Upload gambar ke Firebase Storage
            const ref = FIREBASE.storage().ref().child(filename);
            await ref.put(blob);
    
            // Mendapatkan URL gambar dari Firebase Storage
            const downloadURL = await ref.getDownloadURL();
    
            // Set the downloaded URL in the user data
            const updatedUserData = { ...userData, profileImage: downloadURL };
            await setData('user', updatedUserData);
    
            // Update the user data in the Realtime Database
            const user = FIREBASE.auth().currentUser;
            if (user) {
                await FIREBASE.database().ref(`users/${user.uid}`).update({
                    profileImage: downloadURL,
                });
            }
    
            setUploading(false);
            setImage(null);
    
            // Memperbarui data profil setelah gambar diunggah
            getUserData();
        } catch (error) {
            console.log('Error uploading image:', error.message);
            setUploading(false);
            alert(error.message);
        }
    }; 

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
        const fetchData = async () => {
            try {
              const profile = await getData('user'); // Replace with your Firebase fetch function
              if (profile) {
                setEmail(profile.email || '');
                setNohp(profile.nohp || '');
                setNama(profile.nama || '');
              } else {
                toggleAlert('User data not available');
              }
            } catch (error) {
              console.error('Error fetching profile:', error.message);
              toggleAlert('Error fetching profile');
            }
          };
        
        const unsubscribe = navigation.addListener('focus', fetchData);

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    const onEditProfile = async () => {
        try {
          if (email && nohp && nama) {
            const data = {
              email: email,
              nohp: nohp,
              nama: nama,
            };
    
            await setData('user', data);
            navigation.replace('Profile');
          } else {
            toggleAlert('Data tidak lengkap');
          }
        } catch (error) {
          console.error('Error editing profile:', error.message);
          toggleAlert('Error editing profile');
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
                            {image ? (
                                <Image
                                    source={image}
                                    width={230}
                                    height={230}
                                    borderRadius={120}
                                    resizeMode="cover"
                                    flex={1}
                                    alt="profile"
                                />
                            ) : profile && profile.profileImage ? (
                                <Image
                                    source={{ uri: profile.profileImage }}
                                    width={230}
                                    height={230}
                                    borderRadius={120}
                                    resizeMode="cover"
                                    flex={1}
                                    alt="profile"
                                />
                            ) : (
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
                            
                            <Box 
                              backgroundColor={"white"} 
                              width={70}
                              height={70}
                              borderRadius={100}
                              position={"absolute"}
                              right={-4}
                              alignItems={"center"}
                              justifyContent={"center"}>
                                <TouchableOpacity onPress={pickImage}>
                                    <Ionicons name="create-outline" size={35} color={"#F15A24"}/>
                                </TouchableOpacity>
                            </Box>
                        </Box>

                        <FormControl>
                            <Box
                            alignSelf={"center"}
                            justifyContent={"center"}
                            backgroundColor={"white"}
                            width={"85%"}
                            padding={6}
                            borderRadius={10}
                            shadowOpacity={10}
                            elevation={15}
                            mt={4}
                            mb={3}>
                                <HStack alignItems={"center"} space={4}>
                                    <Ionicons name="person-outline" size={35} color={"#F15A24"}/>
                                    <Input
                                      placeholder="Your Name"
                                      value={nama}
                                      onChangeText={(text) => setNama(text)}
                                      bgColor='white'
                                      borderRadius={15}
                                      width={220} 
                                    />
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
                            mb={3}>
                                <HStack alignItems={"center"} space={4}>
                                    <Ionicons name="mail-outline" size={35} color={"#F15A24"}/>
                                    <Input
                                      placeholder="Your Email"
                                      value={email}
                                      onChangeText={(text) => setEmail(text)}
                                      bgColor='white'
                                      borderRadius={15}
                                      width={220} 
                                    />
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
                            mb={3}>
                                <HStack alignItems={"center"} space={4}>
                                    <Ionicons name="call-outline" size={35} color={"#F15A24"}/>
                                    <Input
                                      placeholder="Your Phone"
                                      value={nohp}
                                      onChangeText={(text) => setNohp(text)}
                                      bgColor='white'
                                      borderRadius={15}
                                      width={220} 
                                    />
                                </HStack>
                            </Box>
                        </FormControl>

                        <Box
                          mt={5}
                          width={"100%"}
                          alignItems={"center"}>
                            <Button
                              text="Upload Profile Picture"
                              onPress={uploadImage}
                            />
                        </Box>

                        <Box
                          mt={4}
                          width={"100%"}
                          alignItems={"center"}>
                            <Button
                              text="Update"
                              onPress={onEditProfile}>
                            </Button>
                        </Box>

                        {/* show Alert */}
                        {showAlert && (
                        <Modal isOpen={showAlert} onClose={toggleAlert}>
                            <ModalBackdrop />
                                <Alert mx="$4" action="error" variant="solid">
                                    <AlertText fontWeight="$bold">Error!</AlertText>
                                    <AlertText>{alertMessage}</AlertText>
                                </Alert>
                        </Modal>
                        )}

                    </Box>
                </View>
            </ScrollView>
        </>
    );
};

export default EditProfile;