import React from "react";
import { Heading, Image, Text, FlatList, Box, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import kategori from "../datas/kategori";
import { SafeAreaView } from "react-native-safe-area-context";

const Kategori = () => {
  const navigation = useNavigation();

  const navigateToDetailKategori = (selectedCategory) => {
    navigation.navigate("DetailKategori", { kategori: selectedCategory });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetailKategori(item.kategori)}>
        <Box
          width={165} // Set fixed width for each card
          height={210} // Set fixed height for each card
          margin={2}
          borderRadius="md"
          overflow="hidden"
          borderColor="#D3B292" 
          borderWidth={1}
        >
          <Image
            source={{ uri: item.image }}
            alt="Image Data"
            resizeMode="cover"
            height={150} // Set fixed height for each image
          />
          <Box padding={4} bg="white" borderColor="#D3B292" borderWidth={1}>
            <Text color="gray.800" fontWeight="bold" fontSize="md" marginBottom={2}>
              {item.kategori}
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Box bg="#FFEEDB" flex={1}>
        <Box alignItems="center" mt="3" mb="3">
            <Text color="#ED7D31" fontWeight="bold" fontSize="xl">Kategori Resep</Text>
        </Box>
        <FlatList
          data={kategori}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </Box>
    </>
  );
};

export default Kategori;