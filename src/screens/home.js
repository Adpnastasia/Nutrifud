// import React, { useState } from "react";
// import { Heading, Image, Text, Box, FlatList, ScrollView, Input, Icon } from "native-base";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { SliderBox } from 'react-native-image-slider-box';
// import datas from "../datas/datas1";
// import HeaderPro from "../components/headerpro";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// const Home = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredDatas = datas.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const renderRecipeItem = ({ item }) => (
//     <TouchableOpacity
//       activeOpacity={0.5}
//       onPress={() => navigation.navigate("Recipe", { item: item })}
//     >
//       <Box ml={"4"} position="relative">
//         <Heading
//           fontSize={"xs"}
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
//         <Icon
//           as={<MaterialIcons name="arrow-right" />}
//           size="lg"
//           position="absolute"
//           bottom={8}
//           right={8}
//           color="#666"
//         />
//       </Box>
//     </TouchableOpacity>
//   );

//   return (
//     <Box flex={1} bg="#FFEEDC">
//       <HeaderPro />
//       <ScrollView flex={1}>
//         <SliderBox
//           images={[
//             require('../assets/1.png'),
//             require('../assets/2.png'),
//             require('../assets/3.png'),
//             require('../assets/4.png'),
//           ]}
//           resizeMode={'cover'}
//           style={{ width: '100%', height: 230, marginTop: 0 }}
//         />
//         <Box pt={2} px={4}>
//           <Text fontWeight={600} fontSize="lg" px={1} pt={3} mb={3}>Search for Recipes</Text>
//           <Input
//             placeholder="Search"
//             variant="filled"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.nativeEvent.text)}
//             InputRightElement={
//               <Icon
//                 as={<MaterialIcons name="search" />}
//                 size="md"
//                 m={2}
//               />
//             }
//             borderRadius={8}
//           />
//           <FlatList
//             data={filteredDatas}
//             renderItem={renderRecipeItem}
//             keyExtractor={(item) => item.id.toString()}
//             showsHorizontalScrollIndicator={false}
//             horizontal={true}
//             mt={4}
//           />
//         </Box>
//       </ScrollView>
//     </Box>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { Heading, Image, Text, Box, FlatList, ScrollView, Input, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { SliderBox } from 'react-native-image-slider-box';
import HeaderPro from '../components/headerpro';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import datas from "../datas/datas1";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    // Fetch motivational quote on component mount
    fetchMotivationalQuote();

    // Fetch new quote every 30 seconds
    const intervalId = setInterval(fetchMotivationalQuote, 30000);

    return () => clearInterval(intervalId);
  }, []);

  // const fetchMotivationalQuote = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://api.api-ninjas.com/v1/quotes?category=health',
  //       {
  //         headers: {
  //           'X-Api-Key': 'TgJAo2Oqd1B+XcuKGZPsAw==i5pcYBihi7dETVW7',
  //         },
  //       }
  //     );
  //     const quote = response.data[0].quote;

  //     // Hanya set state jika panjang quote kurang dari 100 karakter
  //     if (quote.length < 100) {
  //       setMotivationalQuote(quote);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching motivational quote:', error.message);
  //   }
  // };

  const fetchMotivationalQuote = async () => {
    try {
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/quotes?category=health',
        {
          headers: {
            'X-Api-Key': 'TgJAo2Oqd1B+XcuKGZPsAw==i5pcYBihi7dETVW7',
          },
        }
      );
      const quote = response.data[0].quote;
      setMotivationalQuote(quote);

    } catch (error) {
      console.error('Error fetching motivational quote:', error.message);
    }
  };

  const filteredDatas = datas.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Recipe', { item: item })}
    >
      <Box ml={'4'} position="relative">
        <Heading
          fontSize={'xs'}
          lineHeight={'xs'}
          ellipsizeMode="tail"
          numberOfLines={2}
          zIndex={1}
          position="absolute"
          bottom={5}
          p={2}
          color={'white'}
          bg="#ED7D31"
        >
          {item.title}
        </Heading>
        <Image
          source={{ uri: item.image }}
          w="140"
          h="150"
          alt="Image Data"
          mb={'1'}
          borderRadius={10}
          resizeMode="cover"
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
          style={{ width: '100%', height: 215 }}
          dotColor="#ED7D31"
          inactiveDotColor="#90A4AE"
          autoplay
          circleLoop
        />

        <Box px={4}>
          <Text fontWeight="bold" fontSize="md" px={1} pt={3} mb={3}>
            Health Quotes
          </Text>
        </Box>

        <Box
          alignSelf={"center"}
          justifyContent={"center"}
          backgroundColor={"white"}
          width={"85%"}
          padding={4}
          borderRadius={10}
          shadowOpacity={10}
          elevation={15}>
            <Text fontSize="md">"{motivationalQuote}"</Text>
        </Box>

        <Box px={4}>
          <Text fontWeight="bold" fontSize="md" px={1} pt={3} mb={3}>
            Search for Recipes
          </Text>
        </Box>

        <Box
          alignSelf={"center"}
          justifyContent={"center"}
          backgroundColor={"white"}
          width={"85%"}
          padding={2}
          borderRadius={10}
          shadowOpacity={10}
          elevation={15}>
            <Input
              placeholder="Search"
              variant="filled"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.nativeEvent.text)}
              InputRightElement={<Icon as={<MaterialIcons name="search" />} size="md" m={2} />}
              borderRadius={8}
            />
        </Box>

          <FlatList
            data={filteredDatas}
            renderItem={renderRecipeItem}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            mt={4}
          />
        <Box mt={100}/>
      </ScrollView>
    </Box>
  );
};

export default Home;