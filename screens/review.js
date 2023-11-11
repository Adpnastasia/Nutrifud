// import React, { useState } from 'react';
// import {
//   NativeBaseProvider,
//   Heading,
//   Image,
//   Text,
//   FlatList,
//   Pressable,
//   Box,
//   ScrollView,
// } from "native-base";
// import datas from "../datas";
// import { SafeAreaView } from 'react-native';

// const Bookmark = () => {
//   const [bookmarkSebelumLove, bookmarkSetelahLove] = useState([]);

//   const toggleLove = (itemId) => {
//     if (bookmarkSebelumLove.includes(itemId)) {
//       bookmarkSetelahLove(bookmarkSebelumLove.filter(id => id !== itemId));
//     } else {
//       bookmarkSetelahLove([...bookmarkSebelumLove, itemId]);
//     }
//   };

//   const isLoved = (itemId) => bookmarkSebelumLove.includes(itemId);

//   const renderitem = ({ item }) => {
//     return (
//       <NativeBaseProvider>
//           <Pressable 
//             bg={"#FFEEDC"}
//             flex={1}
//             activeOpacity={0.5}
//           >
//             <Box bg={'white'}
//               p={'5'}
//               borderBottomColor={"orange.400"}
//               borderBottomWidth={1}
//               flexDirection="row"
//               flex={1}
//             >
//               <Box flex={1} mr={'5'}>
//                 <Image
//                   source={{ uri: item.image }}
//                   w="full"
//                   h="full"
//                   alt="Image Data"
//                 />
//               </Box>
//               <Box flex={1.8}>
//                 <Text fontSize={"sm"}>{item.date}</Text>
//                 <Heading lineHeight={"md"} fontSize={"md"}>
//                   {item.title}
//                 </Heading>
//                 <Pressable onPress={() => toggleLove(item.id)}>
//                   <Text>{isLoved(item.id) ? '❤️ Disukai' : '🤍 Sukai'}</Text>
//                 </Pressable>
//               </Box>
//             </Box>
//           </Pressable>
//       </NativeBaseProvider>
//     );
//   };

//   return (
//     <SafeAreaView>
//       <Box>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//           {datas.slice(14).map((item, index) => {
//             return (
//               <Pressable
//                 activeOpacity={0.5}
//                 key={index}
//               >
//                 <Box w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
//                   <Image
//                     source={{ uri: item.image }}
//                     w="full"
//                     h="24"
//                     alt="Image Data"
//                     mb={"2"}
//                   />
//                   <Text fontSize={"xs"} color="light.300">
//                     {item.date}
//                   </Text>
//                   <Heading
//                     fontSize={"sm"}
//                     lineHeight={"xs"}
//                     ellipsizeMode="tail"
//                     numberOfLines={2}
//                     color="light.50"
//                   >
//                     {item.title}
//                   </Heading>
//                   <Pressable onPress={() => toggleLove(item.id)}>
//                     <Text>{isLoved(item.id) ? '❤️ Disukai' : '🤍 Sukai'}</Text>
//                   </Pressable>
//                 </Box>
//               </Pressable>
//             );
//           })}
//         </ScrollView>
//       </Box>
//       <FlatList
//         data={datas}
//         renderItem={renderitem}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// };

// export default Bookmark;\

import React from "react";
import { FlatList, Image, Text , Pressable, View, content, NativeBaseProvider, Box, Heading} from "native-base";

const datas = [
  {
    id: 1,
    title: "Chicken Satay with Salad",
    description: "Loved itt",
    image:
      "https://i.pinimg.com/564x/e0/89/78/e089786326df1b9125cfcc553bd92ab7.jpg",
    content: content,
  },
  {
    id: 2,
    title: "Creamy Vegan Tomato and Cauliflower Bisque",
    description: "So Good",
    image:
      "https://i.pinimg.com/564x/ab/7c/97/ab7c978def53dab12dd788a3c4082bbe.jpg",
    content: content,
  },
  {
    id: 3,
    title: "Healthy Toast",
    description: "Liked it",
    image:
      "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    content: content,
  },
  {
    id: 4,
    title: "Healthy Pasta",
    description: "Nice nice",
    image:
      "https://i.pinimg.com/564x/6a/b3/e8/6ab3e82ec375d04ee02c0f3db7439c51.jpg",
    content: content,
  },
  {
    id: 5,
    title: "Protein packed Chicken and Avocado Macro bowl",
    description: "Very Good",
    image:
      "https://i.pinimg.com/564x/5c/30/b9/5c30b9dae570613a7a2af2b06aa79b88.jpg",
    content: content,
  },
  {
    id: 6,
    title: "Chicken Satay with Salad",
    description: "Awesomee",
    image:
      "https://i.pinimg.com/564x/e0/89/78/e089786326df1b9125cfcc553bd92ab7.jpg",
    content: content,
  },
  {
    id: 7,
    title: "Creamy Vegan Tomato and Cauliflower Bisque",
    description: "my dad liked it",
    image:
      "https://i.pinimg.com/564x/ab/7c/97/ab7c978def53dab12dd788a3c4082bbe.jpg",
    content: content,
  },
  {
    id: 8,
    title: "Healthy Toast",
    description: "i hope my friend try this, bcs it's just to good",
    image:
      "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    content: content,
  },
  {
    id: 9,
    title: "Healthy Pasta",
    description: "My mom make this, instantly like it",
    image:
      "https://i.pinimg.com/564x/6a/b3/e8/6ab3e82ec375d04ee02c0f3db7439c51.jpg",
    content: content,
  },
  {
    id: 10,
    title: "Protein packed Chicken and Avocado Macro bowl",
    description: "Liked it so much",
    image:
      "https://i.pinimg.com/564x/5c/30/b9/5c30b9dae570613a7a2af2b06aa79b88.jpg",
    content: content,
  },
];

const List = () => {
  const renderItem = ({ item }) => {
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
                <Text>{item.description}</Text>
                <Pressable onPress={() => toggleLove(item.id)}>
                </Pressable>
              </Box>
            </Box>
          </Pressable>
      </NativeBaseProvider>
    );
  };

  return (
    <FlatList
      data={datas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;