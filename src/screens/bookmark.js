import React, { useState, useEffect } from 'react';
import { FlatList } from 'native-base';
import { Box, Heading, Image, Text, Button, HStack, VStack } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Header from '../components/header';

const Bookmark = () => {
  const navigation = useNavigation();
  const [bookmarks, setBookmarks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadBookmarks();
    }, [])
  );

  const loadBookmarks = async () => {
    try {
      const savedBookmarks = await AsyncStorage.getItem('bookmarks');
      if (savedBookmarks !== null) {
        setBookmarks(JSON.parse(savedBookmarks));
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    }
  };

  const deleteBookmark = async (selectedId) => {
    try {
      const updatedBookmarks = bookmarks.filter(item => item.id !== selectedId);
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    } catch (error) {
      console.error('Error deleting bookmark:', error);
    }
  };

  const navigateToReview = (selectedRecipe) => {
    navigation.navigate('review', {
      screen: 'review',
      params: { selectedRecipe }
    });

  };

  const renderitem = ({ item }) => {
    return (
      <Box bg="#FFEEDC" p="5" borderBottomColor="orange.400" borderBottomWidth={1} flexDirection="row">
        <Box flex={1} mr="5">
          <Image source={{ uri: item.image }} alt="Image Data" w="100" h="50" borderRadius="xl" />
        </Box>
        <Box flex={2} justifyContent="flex-end">
          <VStack>
            <HStack justifyContent="flex-end">
              <Heading lineHeight="md" fontSize="md">
                {item.title}
              </Heading>
              <Button bg="white" onPress={() => navigateToReview(item)} >
                <Ionicons name="pencil-outline" />
              </Button>
              <Button bg="white" onPress={() => deleteBookmark(item.id)}>
                <Ionicons name="trash-outline" />
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Header />
      <Box flex={1} bg="#FFEEDC">
        <FlatList
          data={bookmarks}
          renderItem={renderitem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          marginBottom="100px"
        />
      </Box>
    </>
  );
};

export default Bookmark;