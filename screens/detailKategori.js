import React from 'react';
import { Text, FlatList, Image, Box, VStack, HStack, IconButton, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon
import datas from "../datas/datas1";

const DetailKategori = ({ route }) => {
  const { kategori } = route.params;
  const navigation = useNavigation();

  // Filter recipes only if kategori is defined
  const filteredRecipes = datas.filter((recipe) => recipe.kategori && recipe.kategori.includes(kategori));

  const navigateToRecipeDetail = (recipe) => {
    navigation.navigate('Recipe', { item: recipe });
  };

  return (
    <Box p={4} flex={1} bg="#FFEEDB">
      {/* Header with back button */}
      <HStack alignItems="center" mb={4}>
        <IconButton
          onPress={() => navigation.goBack()} // Go back when the button is pressed
          icon={<Icon name="arrow-left" size={24} color="#ED7D31" />} // Arrow back icon
        />
        <Text color="#ED7D31" fontSize="xl" fontWeight="bold" ml={2}>
          Resep {kategori}
        </Text>
      </HStack>

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigateToRecipeDetail(item)}>
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
                  <Text color="gray.500" fontWeight="bold">Calories: {item.calories}</Text>
                </Box>
              </VStack>
            </Box>
          </Pressable>
        )}
      />  
    </Box>
  );
};

export default DetailKategori;