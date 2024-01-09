// import React, { useState, useEffect } from 'react';
// import { FlatList } from 'native-base';
// import { Box, Heading, Image, Text, Button, HStack, VStack } from 'native-base';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import Header from '../components/header';

// const Bookmark = () => {
//   const navigation = useNavigation();
//   const [bookmarks, setBookmarks] = useState([]);

//   useFocusEffect(
//     React.useCallback(() => {
//       loadBookmarks();
//     }, [])
//   );

//   const loadBookmarks = async () => {
//     try {
//       const savedBookmarks = await AsyncStorage.getItem('bookmarks');
//       if (savedBookmarks !== null) {
//         setBookmarks(JSON.parse(savedBookmarks));
//       }
//     } catch (error) {
//       console.error('Error loading bookmarks:', error);
//     }
//   };

//   const deleteBookmark = async (selectedId) => {
//     try {
//       const updatedBookmarks = bookmarks.filter(item => item.id !== selectedId);
//       setBookmarks(updatedBookmarks);
//       await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
//     } catch (error) {
//       console.error('Error deleting bookmark:', error);
//     }
//   };

//   const navigateToReview = (selectedRecipe) => {
//     navigation.navigate('review', {
//       screen: 'review',
//       params: { selectedRecipe }
//     });

//   };

//   const renderitem = ({ item }) => {
//     return (
//       <Box bg="#FFEEDC" p="5" borderBottomColor="orange.400" borderBottomWidth={1} flexDirection="row">
//         <Box flex={1} mr="5">
//           <Image source={{ uri: item.image }} alt="Image Data" w="100" h="50" borderRadius="xl" />
//         </Box>
//         <Box flex={2} justifyContent="flex-end">
//           <VStack>
//             <HStack justifyContent="flex-end">
//               <Heading lineHeight="md" fontSize="md">
//                 {item.title}
//               </Heading>
//               {/* <Button bg="white" onPress={() => navigateToReview(item)} >
//                 <Ionicons name="pencil-outline" />
//               </Button> */}
//               <Button bg="white" onPress={() => deleteBookmark(item.id)}>
//                 <Ionicons name="trash-outline" />
//               </Button>
//             </HStack>
//           </VStack>
//         </Box>
//       </Box>
//     );
//   };

//   return (
//     <>
//       <Header />
//       <Box flex={1} bg="#FFEEDC">
//         <FlatList
//           data={bookmarks}
//           renderItem={renderitem}
//           keyExtractor={(item) => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           marginBottom="100px"
//         />
//       </Box>
//     </>
//   );
// };

// export default Bookmark;

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
      <Box bg="#FFEEDC" p="5" borderBottomColor="orange.400" borderBottomWidth={1} flexDirection="row" alignSelf="stretch">
        <VStack>
          <Box
            flexDirection="row"
            alignItems="flex-start"
            justifyContent={"space-between"}
            backgroundColor={"white"}
            width={350}
            padding={2}
            borderRadius={10}
            shadowOpacity={10}
            elevation={15}
            flex={2}>
            <HStack space={2} alignItems="center" justifyContent="space-between" width="100%">
              <HStack>
                <Image source={{ uri: item.image }} alt="Image Data" w="100" h="50" borderRadius="xl" alignSelf="flex-start" />
                <VStack flexShrink={1} ml={2} justifyContent="center">
                  <Heading lineHeight="md" fontSize="md" maxWidth={200} numberOfLines={2}>
                    {item.title}
                  </Heading>
                </VStack>
              </HStack>
              <Button bg="white" onPress={() => deleteBookmark(item.id)} px={2} py={2}>
                <Ionicons name="trash-outline" />
              </Button>
            </HStack>
          </Box>
        </VStack>
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