import React, { useState } from 'react';
import {
  NativeBaseProvider,
  Heading,
  Image,
  Text,
  FlatList,
  Pressable,
  Box,
  ScrollView,
  IconButton,
  Icon,
  Entypo,
  Button,
  HStack,
  VStack,
} from "native-base";
import datas from "../datas";
import { SafeAreaView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';

const Bookmark = () => {
  const navigation = useNavigation();

  const navigateToReview = (selectedRecipe) => {
    navigation.navigate('review', { datas });
  };

  const renderitem = ({ item }) => {
    return (
      <Box bg={'#FFEEDC'}
        p={'5'}
        borderBottomColor={"orange.400"}
        borderBottomWidth={1}
        flexDirection="row"
      >
        <Box flex={1} mr={'5'}>
          <Image
            source={{ uri: item.image }}
            w="100"
            h="50"
            alt="Image Data"
            borderRadius={'xl'}
          />
        </Box>
        <Box flex={2} justifyContent={'flex-end'}>
          {/* <HStack bg={'warning.700'}> */}
          <Box>
            <VStack>
              <HStack justifyContent={'flex-end'}>
                <Heading lineHeight={"md"} fontSize={"md"}>
                  {item.title}
                </Heading>
                {/* <Text>❤️</Text> */}
                <Box>
                  <Button bg={'white'} onPress={() => navigateToReview} >
                    <Ionicons name="pencil-outline"></Ionicons>
                  </Button>
                </Box>
              </HStack>
            </VStack>
          </Box>
          {/* </HStack> */}
        </Box>
      </Box>
    );
  };

  return (
    <>
    <Header/>
    <Box flex={1} bg={"#FFEEDC"}>
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        marginBottom={100}
      />
    </Box>
    </>
  );
};

export default Bookmark;
