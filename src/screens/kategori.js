// import React from "react";
// import { Image, Text, FlatList, Box } from "native-base";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// // import kategori from "../datas/kategori";
// import kategori from '../datas/kategori'

// const Kategori = () => {
//   const navigation = useNavigation();

//   const navigateToDetailKategori = (selectedCategory) => {
//     navigation.navigate("DetailKategori", { kategori: selectedCategory });
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity onPress={() => navigateToDetailKategori(item.kategori)}>
//         <Box
//           width={165} 
//           height={210} 
//           margin={2}
//           borderRadius="md"
//           overflow="hidden"
//           borderColor="#D3B292" 
//           borderWidth={1}
//         >
//           <Image
//             source={{ uri: item.image }}
//             alt="Image Data"
//             resizeMode="cover"
//             height={150} 
//           />
//           <Box padding={4} bg="white" borderColor="#D3B292" borderWidth={1}>
//             <Text color="gray.800" fontWeight="bold" fontSize="md" marginBottom={2}>
//               {item.kategori}
//             </Text>
//           </Box>
//         </Box>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <>
//       <Box bg="#FFEEDB" flex={1}>
//         <Box alignItems="center" mt="3" mb="3">
//             <Text color="#ED7D31" fontWeight="bold" fontSize="xl">Kategori Resep</Text>
//         </Box>
//         <FlatList
//           data={kategori}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           numColumns={2}
//         />
//       </Box>
//     </>
//   );
// };

// export default Kategori;

import React from "react";
import { Image, Text, FlatList, Box, IconButton } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import kategori from '../datas/kategori'
import Header from "../components/header";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon

const Kategori = () => {
  const navigation = useNavigation();

  const navigateToDetailKategori = (selectedCategory) => {
    navigation.navigate("DetailKategori", { kategori: selectedCategory, allKategori: kategori });
  };

  const renderHeader = () => {
    return (
      <Box flexDirection="row" alignItems="center" mt={2} mb={2}>
        <IconButton
          onPress={() => navigation.goBack()} // Go back when the button is pressed
          icon={<Icon name="arrow-left" size={24} color="#ED7D31" />} // Arrow back icon
        />
        <Text color="#ED7D31" fontWeight="bold" fontSize="xl" ml={2}>
          All Category
        </Text>
      </Box>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetailKategori(item.kategori)}>
        <Box
          width={165} 
          height={210} 
          margin={3.5}
          borderRadius="md"
          overflow="hidden"
          borderColor="#D3B292" 
          borderWidth={1}
          justifyContent="center"
        >
          <Image
            source={{ uri: item.image }}
            alt="Image Data"
            resizeMode="cover"
            height={150} 
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
        <Header/>
        <Box bg="#FFEEDB" flex={1}>
          {renderHeader()}
          <FlatList
            data={kategori}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
          <Box style={{ marginTop: 100 }}>
          </Box>
        </Box>
    </>
  );
};

export default Kategori;