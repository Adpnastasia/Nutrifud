// import React from "react";
// import {
//   FlatList,
//   Image,
//   Text,
//   Pressable,
//   View,
//   content,
//   NativeBaseProvider,
//   Box,
//   Heading,
// } from "native-base";
// // import datas from "../datas";
// import datas from "../datas/datas1"
// import Header from "../components/header";

// const List = () => {
//   const renderItem = ({ item }) => {
//     return (
//       <NativeBaseProvider>
//         <Box bg={"green.500"} flex={1}>
//           <Box
//             bg={"white"}
//             p={"5"}
//             borderBottomColor={"orange.400"}
//             borderBottomWidth={1}
//             flexDirection="row"
//             flex={1}
//           >
//             <Box flex={1} mr={"5"}>
//               <Image
//                 source={{ uri: item.image }}
//                 w="full"
//                 h="full"
//                 alt="Image Data"
//               />
//             </Box>
//             <Box flex={1.8}>
//               <Heading lineHeight={"md"} fontSize={"md"}>
//                 {item.title}
//               </Heading>
//               <Text>{item.description}</Text>
//             </Box>
//           </Box>
//         </Box>
//       </NativeBaseProvider>
//     );
//   };

//   return (
//     <>
//     <Header/>
//     <FlatList
//       data={datas}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//     />
//     <Box style={{ marginTop: 100 }}>
//     </Box>
//     </>
//   );
// };

// export default List;

import React from "react";
import {
  FlatList,
  Image,
  Text,
  NativeBaseProvider,
  Box,
  Heading,
  IconButton,
  useToast,
} from "native-base";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../components/header";
import datas from "../datas/datas1";

const List = () => {
  const toast = useToast();
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleEditPress = async (item) => {
    try {
      // You can navigate to your form screen here
      navigation.navigate("EditReview", { item }); // Pass the item data to the form screen

      // Display a success message if needed
      toast.show({
        title: "Navigating to EditForm",
        status: "success",
      });
    } catch (error) {
      console.error("Navigation error:", error);
      toast.show({
        title: "Failed to navigate",
        status: "error",
      });
    }
  };

  const renderItem = ({ item }) => {
    return (
      <NativeBaseProvider>
        <Box bg={"green.500"} flex={1}>
          <Box
            bg={"white"}
            p={"5"}
            borderBottomColor={"orange.400"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          >
            <Box flex={1} mr={"5"}>
              <Image
                source={{ uri: item.image }}
                w="full"
                h="full"
                alt="Image Data"
              />
            </Box>
            <Box flex={1.8}>
              <Heading lineHeight={"md"} fontSize={"md"}>
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Box>
            <Box flex={0.2} alignItems="center" justifyContent="center">
              <IconButton
                icon={<Icon name="pencil" type="FontAwesome" />}
                onPress={() => handleEditPress(item)}
                size="20px"
              />
            </Box>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  };

  return (
    <>
      <Header />
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Box style={{ marginTop: 100 }} />
    </>
  );
};

export default List;