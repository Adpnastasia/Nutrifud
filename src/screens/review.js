import React from "react";
import {
  FlatList,
  Image,
  Text,
  Pressable,
  View,
  content,
  NativeBaseProvider,
  Box,
  Heading,
} from "native-base";
// import datas from "../datas";
import datas from "../datas/datas1"
import Header from "../components/header";

const List = () => {
  const renderItem = ({ item }) => {
    return (
      <NativeBaseProvider>
        <Box bg={"green.500"} flex={1}>
          <Box
            bg={"white"}
            p={"5"}
            borderBottomColor={"orange.400"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          >
            <Box flex={1} mr={"5"}>
              <Image
                source={{ uri: item.image }}
                w="full"
                h="full"
                alt="Image Data"
              />
            </Box>
            <Box flex={1.8}>
              <Heading lineHeight={"md"} fontSize={"md"}>
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Box>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  };

  return (
    <>
    <Header/>
    {/* <FlatList
      data={datas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    /> */}
    </>
  );
};

export default List;
