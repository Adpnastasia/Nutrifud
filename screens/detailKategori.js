import React from 'react';
import { Text, FlatList, Image, Box, VStack, Spacer } from 'native-base';
import datas from '../datas/datas';

const RecipesByCategory = ({ route }) => {
  const { kategori } = route.params;

  // Filter recipes based on the selected category
  const filteredRecipes = datas.filter((recipe) => recipe.kategori.includes(kategori));

  return (
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
  );
};

export default RecipesByCategory;