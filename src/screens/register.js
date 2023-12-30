import React, { useState } from "react";
// import {
//     Box,
//     Alert,
//     FormControl,
//     Text,
//     Modal,
//     ModalBackdrop,
//     AlertText,
// } from "@gluestack-ui/themed";
import { Box, Alert, FormControl,Text,Modal,ModalBackdrop,AlertText,Input,Image,Heading,Button } from "native-base";
// import { Input, Button } from "../components";
import { registerUser } from "../actions/AuthAction";


const Register = ({ navigation }) => {
    // const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nohp, setNohp] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
    };

    const onRegister = async () => {
        if ( email && nohp && password) {
            const data = {
                email: email,
                nohp: nohp,
                password: password,
                status: "user",
            };

            console.log(data);

            try {
                const user = await registerUser(data, password);
                navigation.replace("Login");
            } catch (error) {
                console.log("Error", error.message);
                toggleAlert(error.message);
            }
        } else {
            console.log("Error", "Data tidak lengkap");
            toggleAlert("Tolong Lengkapi Data");
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
            <Box backgroundColor='white' marginTop={"5"} flex={1} borderTopLeftRadius={'56'} borderTopRightRadius={'56'} alignItems={'center'}>
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
                        onChangeText={(email) => setEmail(email)} // Set email ke dalam state
                        value={email}
                        style={{ backgroundColor: '#D9D9D9' }}
                    />
                    <FormControl.Label fontWeight={'bold'} mt={'5'}>
                        No. Handphone
                    </FormControl.Label>
                    <Input
                        label={"No. Handphone"}
                        borderRadius={'xl'}
                        width={"max"}
                        height={"10"}
                        // secureTextEntry={true}
                        onChangeText={(nohp) => setNohp(nohp)} // Set nohp ke dalam state
                        value={nohp}
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
                        // secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)} // Set password ke dalam state
                        value={password}
                        style={{ backgroundColor: '#D9D9D9' }}
                    />
                    <Button title="Register" type="text" padding={"3"} bg={'#F15A24'} mt={'20'} w={'5/6'} ml={'5'} borderRadius={'full'} onPress={() => { onRegister(); }}>
                        Register
                    </Button>
                </FormControl>
            </Box>
        </Box>
        //     {/* show Alert */}
        //     {showAlert && (
        //         <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
        //             <ModalBackdrop />
        //             <Alert mx="4" action="error" variant="solid">
        //                 <AlertText fontWeight="bold">Error!</AlertText>
        //                 <AlertText>{alertMessage}</AlertText>
        //             </Alert>
        //         </Modal>
        //     )}
        // </Box>
    );
};

export default Register;