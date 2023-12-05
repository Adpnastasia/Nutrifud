import React from "react";
import { Heading, Image, Text, Box, View, FlatList, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from 'react-native-image-slider-box';
import datas from "../datas";
import Header from '../components/header';

const Home = () => {
  const navigation = useNavigation();

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate("Recipe", { item: item })}
    >
      <Box w={"40"} mr={"3"} ml={"4"} position="relative">
        <Heading
          fontSize={"sm"}
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
          w="full"
          h="200"
          alt="Image Data"
          mb={"1"}
          borderRadius={10}
        />
      </Box>
    </TouchableOpacity>
  );

  return (
    <>
      <Header/>
      <ScrollView style={{ marginTop: 0 }}>
        <Box bg="#FFEEDC" flex={1} style={{ paddingTop: 0 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 0 }}>
          </View>
          <SliderBox
            images={[
              require('../assets/1.png'),
              require('../assets/2.png'),
              require('../assets/3.png'),
              require('../assets/4.png'),
            ]}
            resizeMode={'cover'}
            style={{ width: '250', height: 230, marginTop: 0 }}
          />
          <Box pt={3}>
            <Text ml={4} fontWeight={500} mb={3}>Recommendations</Text>
            <FlatList
              data={datas}
              renderItem={renderRecipeItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              horizontal={true}
            />
          </Box>
          <Box pt={2}>
            <Text ml={4} fontWeight={500} mb={3}>Try some of our Recipe!</Text>
            <FlatList
              data={datas}
              renderItem={renderRecipeItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              horizontal={true}
            />
          </Box>
          <Box pt={2}>
            <FlatList
              data={datas}
              renderItem={renderRecipeItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              horizontal={true}
            />
          </Box>
          <Box style={{ marginTop: 100 }}>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Home;