import React from "react";
import {
  Input,
  Stack,
  TextArea,
  FormControl,
  View,
  Text,
  Button,
  Container,
  Center,
  Box,
  Flex,
  Spacer,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

export const FormExample = () => {
  return (
    <Box
      flex={1}
      p={4}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"white"}
    >
      <FormControl alignItems={"center"}>
        <Stack space={10}>
          <Stack>
            <FormControl.Label>Nama</FormControl.Label>
            <Input variant="underlined" p={2} placeholder="Nama Resep" />
          </Stack>
          <Stack>
            <FormControl.Label>Bahan</FormControl.Label>
            <TextArea
              h={20}
              placeholder="Bahan - bahan yang diperlukan"
              w="100%"
              maxW="100%"
            />
          </Stack>
          <Stack>
            <FormControl.Label>Cara Pembuatan</FormControl.Label>
            <TextArea
              h={20}
              placeholder="Cara pembuatan"
              w="100%"
              maxW="100%"
            />
          </Stack>
        </Stack>
      </FormControl>

      <Button
        bg={"#FFEEDC"}
        m={"10"}
        borderRadius={"lg"}
        size={"lg"}
        maxHeight={"full"}
        maxWidth={"full"}
      >
        <Text>Kirim</Text>
      </Button>
    </Box>
  );
};

export default FormExample;
