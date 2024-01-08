// EditReview.js

import React from 'react';
import { Box, Heading, Input, NativeBaseProvider, Button, Image, useToast, HStack, IconButton } from 'native-base';
import firebase from '../config/FIREBASE/index.js'; // Import the Firebase configuration
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon

const EditReview = ({ route }) => {
  const { item } = route.params; // Get the item data passed from the List screen
  const [editedDescription, setEditedDescription] = React.useState(item.description);
  const toast = useToast();
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleSave = async () => {
    try {
      // Update data in Firebase
      await firebase.firestore().collection("reviews").doc(item.id).update({
        description: editedDescription,
      });

      // Display a success message
      toast.show({
        title: "Review Updated!",
        status: "success",
      });
    } catch (error) {
      console.error("Error updating review:", error);

      // Display an error message
      toast.show({
        title: "Failed to update review",
        status: "error",
      });
    }
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#FFEEDB" p={4}>
      <HStack space={2} alignItems="center" mb={4}>
        <IconButton
          onPress={() => navigation.goBack()} // Go back when the button is pressed
          icon={<Icon name="arrow-left" size={24} color="#ED7D31" />} // Arrow back icon
        />
          <Heading color="orange.500" fontSize="lg" fontWeight="bold">
            Edit Review
          </Heading>
        </HStack>
        <Box bg="white" p={4} borderRadius="md">
          <Heading mb={4}>{item.title}</Heading>
          <Image
            source={{ uri: item.image }}
            alt="Recipe Image"
            size="2xl" // Adjust the size based on your design preferences
            borderRadius="md"
            resizeMode="cover"
            mb={4}
            mx={{ base: 'auto', md: '0' }} // Center the image horizontally on small screens
            shadow={2} // Add a subtle shadow for a better look
          />
          <Input
            value={editedDescription}
            onChangeText={(text) => setEditedDescription(text)}
            placeholder="Edit description"
            multiline
            numberOfLines={4}
          />
          <Button onPress={handleSave} mt={4} colorScheme="orange">
            Save
          </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default EditReview;