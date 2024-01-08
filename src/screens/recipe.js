import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Box, View, Image, Text, IconButton } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Inform from "../components/inform";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";

const Recipe = ({ route }) => {
  const navigation = useNavigation();
  const params = route.params.item;
  const [icon, setIcon] = useState("bookmark-outline");
  const [icon1, setIcon1] = useState("pencil");
  console.log(params);

  useEffect(() => {
    checkBookmark();
  }, []);

  const checkBookmark = async () => {
    const bookmarks = JSON.parse(await AsyncStorage.getItem("bookmarks")) || [];
    if (bookmarks.some((b) => b.id === params.id)) {
      setIcon("bookmark");
    }
  };

  const handleIconPress = async () => {
    const bookmarks = JSON.parse(await AsyncStorage.getItem("bookmarks")) || [];
    if (icon === "bookmark-outline") {
      const updatedBookmarks = [...bookmarks, params];
      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIcon("bookmark");
    } else {
      const updatedBookmarks = bookmarks.filter((b) => b.id !== params.id);
      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIcon("bookmark-outline");
    }
  };

  const handleIcon1Press = () => {
    navigation.navigate("Write", { data: params });
  };

  return (
    <Box flex={1} bg="#FFEEDC">
      <Header withBack="true" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
        {/* <TouchableOpacity onPress={handleIcon1Press} style={{ alignItems: 'flex-end' }}>
          <Ionicons name={icon1} size={35} color="#F15A24" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleIconPress} style={{ alignItems: 'flex-start' }}>
          <Ionicons name={icon} size={35} color="#F15A24" />
        </TouchableOpacity>
      </View>
      <Box
        bg="white"
        flex={1}
        mt="110px"
        borderTopLeftRadius={56}
        borderTopRightRadius={56}
        alignItems="center"
      >
        <Image
          source={{ uri: params.image }}
          alt="Image Data"
          w="250px"
          h="250px"
          borderRadius="150"
          position="absolute"
          top="-140px"
        />
        <Text mt="125px" fontSize="20px" fontWeight="bold" mb="20px">
          {params.title}
        </Text>
        <ScrollView flex={1} width="100%">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="70%"
            mx="auto"
            my="4"
          >
            <Inform Text={params.time} Ionicons="time-outline" />
            <Inform Text={params.calories} Ionicons="calculator-outline" />
          </Box>

          <Box alignSelf="flex-start" mx="4" my="4">
            <Text fontSize="22px" fontWeight="600" mb="2">
              Ingredients:
            </Text>
            {params.ingredients.map((ingredient, index) => (
              <Text key={index} fontSize="18px" my="1">
                {ingredient}
              </Text>
            ))}
          </Box>

          <Box alignSelf="flex-start" mx="4" my="4">
            <Text fontSize="22px" fontWeight="600" mb="2">
              Recipe Steps:
            </Text>
            <Text fontSize="18px">{params.content}</Text>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Recipe;
