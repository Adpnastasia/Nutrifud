import React, { useState } from 'react';
import {
  NativeBaseProvider,
  Heading,
  Image,
  Text,
  FlatList,
  Pressable,
  Box,
  ScrollView,
} from "native-base";
import datas from "../datas";
import { SafeAreaView } from 'react-native';

const Bookmark = () => {
  const [bookmarkSebelumLove, bookmarkSetelahLove] = useState([]);

  const toggleLove = (itemId) => {
    if (bookmarkSebelumLove.includes(itemId)) {
      bookmarkSetelahLove(bookmarkSebelumLove.filter(id => id !== itemId));
    } else {
      bookmarkSetelahLove([...bookmarkSebelumLove, itemId]);
    }
  };

  const isLoved = (itemId) => bookmarkSebelumLove.includes(itemId);

  const renderitem = ({ item }) => {
    return (
      <NativeBaseProvider>
          <Pressable 
            bg={"#FFEEDC"}
            flex={1}
            activeOpacity={0.5}
          >
            <Box bg={'white'}
              p={'5'}
              borderBottomColor={"orange.400"}
              borderBottomWidth={1}
              flexDirection="row"
              flex={1}
            >
              <Box flex={1} mr={'5'}>
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
                <Pressable onPress={() => toggleLove(item.id)}>
                  <Text>{isLoved(item.id) ? '❤️ Disukai' : '🤍 Sukai'}</Text>
                </Pressable>
              </Box>
            </Box>
          </Pressable>
      </NativeBaseProvider>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Bookmark;

