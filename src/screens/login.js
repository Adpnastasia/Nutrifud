import React, { useState } from "react";
// import {
//     Alert,
//     Box,
//     Text,
//     FormControl,
//     Heading,
//     AlertText,
//     Modal,
//     ModalBackdrop,
// } from "@gluestack-ui/themed";
import { Alert, Box, Text, FormControl, Heading, AlertText, Modal, ModalBackdrop, Input, Button, Image, VStack, Center } from "native-base";
// import { Input, Button } from "../components";
import { loginUser } from "../actions/AuthAction"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
    };

    const login = () => {
        if (email && password) {
            loginUser(email, password)
                .then((user) => {
                    // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
                    navigation.navigate('Tabs');
                })
                .catch((error) => {
                    // Terjadi kesalahan saat login, tampilkan pesan kesalahan
                    console.log("Error", error.message);
                    toggleAlert(error.message);
                });
        }
    };

    return (
        <Box flex={1} backgroundColor='#FFEEDC' justifyContent="center">
            <Image
                source={require("../assets/Logo.png")}
                w="150"
                h="150"
                alt="Logo Icon"
                mt={'50'}
                ml={'2/6'}
            />
            <Box backgroundColor='white' marginTop={"50"} flex={1} borderTopLeftRadius={'56'} borderTopRightRadius={'56'} alignItems={'center'}>
                <Heading mt={'10'} fontWeight={'normal'}>
                    Hello, Foodies!
                </Heading>
                <FormControl p={'10'} >
                    <FormControl.Label fontWeight={'bold'}>
                        Email
                    </FormControl.Label>
                    <Input
                        label={"Email"}
                        borderRadius={'xl'}
                        width={"max"}
                        height={"10"}
                        onChangeText={(text) => setEmail(text)} // Set email ke dalam state
                        value={email}
                        style={{ backgroundColor: '#D9D9D9' }}
                    />
                    <FormControl.Label fontWeight={'bold'} mt={'5'}>
                        Password
                    </FormControl.Label>
                    <Input
                        label={"Password"}
                        borderRadius={'xl'}
                        width={"max"}
                        height={"10"}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                        value={password}
                        style={{ backgroundColor: '#D9D9D9' }}
                    />
                    <Button title="Login" type="text" padding={"3"} bg={'#F15A24'} mt={'20'} w={'5/6'} ml={'5'} borderRadius={'full'} onPress={() => { navigation.navigate("Tabs") }}>
                        Login
                    </Button>
                    <FormControl.Label fontWeight={'bold'} mt={'5'} ml={'10'}>
                        Don't have account?
                    </FormControl.Label>
                    <Button title="Register" type="text" padding={"3"} bg={'#F15A24'} mt={'15'} w={'5/6'} ml={'5'} borderRadius={'full'} onPress={() => { navigation.navigate("Register") }}>
                        Register
                    </Button>
                </FormControl>
            </Box>
        </Box>

            // // {/* show Alert */}
            // {showAlert && (
            //     <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
            //         <ModalBackdrop />
            //         <Alert mx="$4" action="error" variant="solid">
            //             <AlertText fontWeight="$bold">Error!</AlertText>
            //             <AlertText>{alertMessage}</AlertText>
            //         </Alert>
            //     </Modal>
    );
};

export default Login;