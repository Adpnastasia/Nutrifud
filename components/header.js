// import { SafeAreaView } from "react-native-safe-area-context";
// import { Box, HStack, Image, Heading, Text } from "native-base";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Header = ({ withBack = false }) => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView>
//         <HStack justifyContent="space-between" alignItems="center" bg="#FFEEDC" borderRadius={10}>
//           <HStack alignItems="center">
//             {!withBack ? (
//               <>
//                 <Image
//                   source={require("../assets/Logo.png")}
//                   w="50"
//                   h="50"
//                   alt="Logo"
//                   mr={"3"}
//                 />
//               </>
//             ) : (
//               <TouchableOpacity
//                 activeOpacity={0.5}
//                 onPress={() => navigation.goBack()}
//               >
//                 <Box mr={"3"}>
//                   <Ionicons name="arrow-back-outline" size={30} color="white" />
//                 </Box>
//               </TouchableOpacity>
//             )}
//           </HStack>
//                 <Text>Welcome, Foodies!</Text>
//           <HStack>
            
//           </HStack>
//         </HStack>
//     </SafeAreaView>
//   );
// };

// export default Header;

import React from "react";
import { SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { Box } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ withBack = false }) => {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView>
        <ImageBackground
          source={require("../assets/Header.png")}
          style={{ width: windowWidth, height: windowHeight * 0.13, alignItems: "center" }}
        >
        <Box position="absolute" bottom={9} left={12}>
          {withBack && (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back-outline" size={30} color="#ED7D31" />
            </TouchableOpacity>
          )}
        </Box>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default Header;