import React from 'react';
import { Box, Text, Image } from 'native-base';
import HeaderPro from '../components/headerpro';
import kategori from '../datas/kategori';

const RecipesForCategory = ({ route }) => {
  const { kategoriBMI } = route.params;

  // Find the selected category data
  const selectedCategory = kategori.find((category) => category.kategori === kategoriBMI);

  // Extract the necessary data
  const { image, kategori: title, recipes } = selectedCategory || {};

  return (
    <>
      <HeaderPro />
      <Box bg="#FFEEDB" flex={1} p={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          {title} Recipes
        </Text>
        {image && <Image source={{ uri: image }} alt="Category Image" height={200} mb={4} />}
        {recipes &&
          recipes.map((recipe) => (
            <Box key={recipe.id} mb={2}>
              <Text fontSize="md" fontWeight="bold">
                {recipe.name}
              </Text>
              <Text>{recipe.description}</Text>
              {/* Add other recipe details as needed */}
            </Box>
          ))}
      </Box>
    </>
  );
};

export default RecipesForCategory;