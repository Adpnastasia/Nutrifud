// // import React from "react";
// // import { Heading, Image, Text, Box, View, FlatList, ScrollView } from "native-base";
// // import { TouchableOpacity } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// // import { SliderBox } from 'react-native-image-slider-box';
// // // import datas from "../datas";
// // import datas from "../datas/datas1"
// // import Header from '../components/header';

// // const Home = () => {
// //   const navigation = useNavigation();

// //   const renderRecipeItem = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.5}
// //       onPress={() => navigation.navigate("Recipe", { item: item })}
// //     >
// //       <Box w={"40"} mr={"3"} ml={"4"} position="relative">
// //         <Heading
// //           fontSize={"sm"}
// //           lineHeight={"xs"}
// //           ellipsizeMode="tail"
// //           numberOfLines={2}
// //           zIndex={1}
// //           position="absolute"
// //           bottom={5}
// //           p={2}
// //           color={"white"}
// //           bg="#ED7D31"
// //         >
// //           {item.title}
// //         </Heading>
// //         <Image
// //           source={{ uri: item.image }}
// //           w="full"
// //           h="200"
// //           alt="Image Data"
// //           mb={"1"}
// //           borderRadius={10}
// //         />
// //       </Box>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <>
// //       <Header/>
// //       <ScrollView style={{ marginTop: 0 }}>
// //         <Box bg="#FFEEDC" flex={1} style={{ paddingTop: 0 }}>
// //           <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 0 }}>
// //           </View>
// //           <SliderBox
// //             images={[
// //               require('../assets/1.png'),
// //               require('../assets/2.png'),
// //               require('../assets/3.png'),
// //               require('../assets/4.png'),
// //             ]}
// //             resizeMode={'cover'}
// //             style={{ width: '250', height: 230, marginTop: 0 }}
// //           />
// //           <Box pt={3}>
// //             <Text ml={4} fontWeight={500} mb={3}>Recommendations</Text>
// //             <FlatList
// //               data={datas}
// //               renderItem={renderRecipeItem}
// //               keyExtractor={(item) => item.id.toString()}
// //               showsVerticalScrollIndicator={false}
// //               horizontal={true}
// //             />
// //           </Box>
// //           <Box pt={2}>
// //             <Text ml={4} fontWeight={500} mb={3}>Try some of our Recipe!</Text>
// //             <FlatList
// //               data={datas}
// //               renderItem={renderRecipeItem}
// //               keyExtractor={(item) => item.id.toString()}
// //               showsVerticalScrollIndicator={false}
// //               horizontal={true}
// //             />
// //           </Box>
// //           <Box pt={2}>
// //             <FlatList
// //               data={datas}
// //               renderItem={renderRecipeItem}
// //               keyExtractor={(item) => item.id.toString()}
// //               showsVerticalScrollIndicator={false}
// //               horizontal={true}
// //             />
// //           </Box>
// //           <Box style={{ marginTop: 100 }}>
// //           </Box>
// //         </Box>
// //       </ScrollView>
// //     </>
// //   );
// // };

// // export default Home;

// import React from "react";
// import { Heading, Image, Text, Box, View, FlatList, ScrollView } from "native-base";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { SliderBox } from 'react-native-image-slider-box';
// import datas from "../datas/datas1";
// import HeaderPro from "../components/headerpro";

// const Home = () => {
//   const navigation = useNavigation();

//   const renderRecipeItem = ({ item }) => (
//     <TouchableOpacity
//       activeOpacity={0.5}
//       onPress={() => navigation.navigate("Recipe", { item: item })}
//     >
//       <Box ml={"4"} position="relative">
//         <Heading
//           fontSize={"sm"}
//           lineHeight={"xs"}
//           ellipsizeMode="tail"
//           numberOfLines={2}
//           zIndex={1}
//           position="absolute"
//           bottom={5}
//           p={2}
//           color={"white"}
//           bg="#ED7D31"
//         >
//           {item.title}
//         </Heading>
//         <Image
//           source={{ uri: item.image }}
//           w="140"
//           h="150"
//           alt="Image Data"
//           mb={"1"}
//           borderRadius={10}
//         />
//       </Box>
//     </TouchableOpacity>
//   );

//   return (
//     <>
//       <HeaderPro />
//       <ScrollView style={{ marginTop: 0 }}>
//         <Box bg="#FFEEDC" flex={1} style={{ paddingTop: 0 }}>
//           <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 0 }}>
//           </View>
//           <SliderBox
//             images={[
//               require('../assets/1.png'),
//               require('../assets/2.png'),
//               require('../assets/3.png'),
//               require('../assets/4.png'),
//             ]}
//             resizeMode={'cover'}
//             style={{ width: '250', height: 230, marginTop: 0 }}
//           />
//           <Box pt={3}>
//             <Text ml={4} fontWeight={500} mb={3}>Recommendations</Text>
//             <FlatList
//               data={datas}
//               renderItem={renderRecipeItem}
//               keyExtractor={(item) => item.id.toString()}
//               showsVerticalScrollIndicator={false}
//               horizontal={true}
//             />
//           </Box>
//           <Box pt={2}>
//             <Text ml={4} fontWeight={500} mb={3}>Try some of our Recipe!</Text>
//             <FlatList
//               data={datas}
//               renderItem={renderRecipeItem}
//               keyExtractor={(item) => item.id.toString()}
//               showsVerticalScrollIndicator={false}
//               horizontal={true}
//             />
//           </Box>
//           <Box pt={2}>
//             <FlatList
//               data={datas}
//               renderItem={renderRecipeItem}
//               keyExtractor={(item) => item.id.toString()}
//               showsVerticalScrollIndicator={false}
//               horizontal={true}
//             />
//           </Box>
//           <Box style={{ marginTop: 100 }}>
//           </Box>
//         </Box>
//       </ScrollView>
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Heading, Image, Text, Box, FlatList, ScrollView, Input, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from 'react-native-image-slider-box';
import datas from "../datas/datas1";
import HeaderPro from "../components/headerpro";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDatas = datas.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate("Recipe", { item: item })}
    >
      <Box ml={"4"} position="relative">
        <Heading
          fontSize={"xs"}
          lineHeight={"xs"}
          ellipsizeMode="tail"
          numberOfLines={2}
          zIndex={1}
          position="absolute"
          bottom={5}
          p={2}
          color={"white"}
          bg="#ED7D31"
        >
          {item.title}
        </Heading>
        <Image
          source={{ uri: item.image }}
          w="140"
          h="150"
          alt="Image Data"
          mb={"1"}
          borderRadius={10}
        />
        <Icon
          as={<MaterialIcons name="arrow-right" />}
          size="lg"
          position="absolute"
          bottom={8}
          right={8}
          color="#666"
        />
      </Box>
    </TouchableOpacity>
  );

  return (
    <Box flex={1} bg="#FFEEDC">
      <HeaderPro />
      <ScrollView flex={1}>
        <SliderBox
          images={[
            require('../assets/1.png'),
            require('../assets/2.png'),
            require('../assets/3.png'),
            require('../assets/4.png'),
          ]}
          resizeMode={'cover'}
          style={{ width: '100%', height: 230, marginTop: 0 }}
        />
        <Box pt={2} px={4}>
          <Text fontWeight={600} fontSize="lg" px={1} pt={3} mb={3}>Search for Recipes</Text>
          <Input
            placeholder="Search"
            variant="filled"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.nativeEvent.text)}
            InputRightElement={
              <Icon
                as={<MaterialIcons name="search" />}
                size="md"
                m={2}
              />
            }
            borderRadius={8}
          />
          <FlatList
            data={filteredDatas}
            renderItem={renderRecipeItem}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            mt={4}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;