import React from "react";
import {
  NativeBaseProvider,
  Box,
  FormControl,
  Center,
  Stack,
  TextArea,
  Input,
  Heading,
  Button,
  Pressable,
  Modal,
  Text,
  Image,
  safeArea
} from "native-base";
import { useState } from "react";
import Header from "../components/header";

const Write = () => {
  const [KirimSelesaiAwal, KirimSelesaiSetelah] = useState(false);

  return (
    <>
    <Header/>
    <NativeBaseProvider>
      <Box flex={1} bg={"#FFEEDC"}>
        <Center>
          <Box width="80%">
            <FormControl bg="primary.50" p={5} rounded="md" mt={"25"}>
              <Stack space={4}>
                <FormControl.Label
                  fontSize="xl"
                  color="white"
                  textAlign="center"
                  _text={{
                    fontWeight: "bold",
                  }}
                >
                  Nama Resep
                </FormControl.Label>
                <Input
                  variant="filled"
                  placeholder="Masukkan Nama Resep"
                  bg="orange.100"
                />
              </Stack>
              <Stack space={4} mt={5}>
                <FormControl.Label
                  fontSize="xl"
                  color="white"
                  textAlign="center"
                  _text={{
                    fontWeight: "bold",
                  }}
                >
                  Bahan - bahan
                </FormControl.Label>
                <TextArea
                  variant="filled"
                  placeholder="Masukkan Bahan-bahan"
                  bg="orange.100"
                />
              </Stack>
              <Stack space={4} mt={5}>
                <FormControl.Label
                  fontSize="xl"
                  color="white"
                  textAlign="center"
                  _text={{
                    fontWeight: "bold",
                  }}
                >
                  Cara pembuatan
                </FormControl.Label>
                <TextArea
                  variant="filled"
                  h={40}
                  placeholder="Masukkan Cara Pembuatan"
                  bg="orange.100"
                />
              </Stack>
              <Button onPress={() => KirimSelesaiSetelah(true)} mt={"10"} bg={'orange.400'}>
                Kirim
              </Button>
              <Modal
                isOpen={KirimSelesaiAwal}
                onClose={() => KirimSelesaiSetelah(false)}
              >
                <Modal.Content h={"40%"} bg={"#FFEEDC"} w={'90%'}>
                  <Modal.Body alignSelf={"center"} mt={"20%"} rounded={"md"}>
                    <Image
                      source={require("../assets/checklist.png")}
                      size={"md"}

                      alignSelf={'center'}
                    />
                    <Text fontSize={'md'}>Terima Kasih! Resepmu berhasil ditambahkan</Text>
                  </Modal.Body>
                  <Modal.Footer justifyContent={"center"} bg={'orange.400'}>
                    <Button.Group>
                      <Button
                        variant='ghost'
                        colorScheme='white'
                        onPress={() => {
                          KirimSelesaiSetelah(false);
                        }}
                      >
                        Tutup
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </FormControl>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
    </>
  );
};

export default Write;


