import React, { useState } from "react";
import { Heading, Image, Text, Box, View, FlatList, ScrollView, Input, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from 'react-native-image-slider-box';
import datas from "../datas/datas1";
import HeaderPro from "../components/headerpro";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Import MaterialIcons

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
          w="140"
          h="150"
          alt="Image Data"
          mb={"1"}
          borderRadius={10}
        />
      </Box>
    </TouchableOpacity>
  );

  return (
    <>
      <HeaderPro />
      <ScrollView style={{ marginTop: 0 }}>
        <Box bg="#FFEEDC" flex={1} style={{ paddingTop: 0 }}>
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

          <Box pt={2}>
            <Text ml={4} fontWeight={500} mb={3}>Search for Recipes</Text>
            <Input
              placeholder="Search"
              variant="filled"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.nativeEvent.text)}
              InputRightElement={
                <Icon
                  as={<MaterialIcons name="search" />} // Use MaterialIcons here
                  size="md"
                  m={2}
                />
              }
            />
            <FlatList
              data={filteredDatas}
              renderItem={renderRecipeItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              horizontal={true}
            />
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Home;