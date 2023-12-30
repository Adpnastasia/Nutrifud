import React from 'react';
import { Text, FlatList, Image, Box, VStack } from 'native-base';
// import { useNavigation } from "@react-navigation/native";
import datas from '../datas/datas';
import Header from '../components/header';

const DetailKategori = ({ route }) => {
  // const navigation = useNavigation();

  // const navigateToRecipe = (selectedRecipe) => {
  //   navigation.navigate("Recipe", { Recipe: selectedRecipe });
  // };

  const { kategori } = route.params;

  const filteredRecipes = datas.filter((recipe) => recipe.kategori.includes(kategori));

  return (
    <>
    <Header/>
      <Box p={4} flex={1} bg="#FFEEDB">
        <Text color="#ED7D31" fontSize="xl" fontWeight="bold" mb={4}>
          Resep {kategori}
        </Text>
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box
              borderWidth={1}
              borderRadius="md"
              overflow="hidden"
              borderColor="#D3B292" 
              bg="white"
              mb={4}
              p={2}
            >
              <Image source={{ uri: item.image }} alt={item.title} height={150} mb={2} />
              <Text fontSize="lg" fontWeight="bold">
                {item.title}
              </Text>
              <VStack space={2}>
                <Box>
                  <Text color="gray.500" fontWeight="bold">Kalori: {item.kalori}</Text>
                </Box>
              </VStack>
            </Box>
          )}
        />
      </Box>
    </>
  );
};

export default DetailKategori;