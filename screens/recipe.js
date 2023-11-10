import { Heading, Center, Text, Box, Image, ScrollView} from "native-base";
import { View } from "native-base";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const NewsDetail = ({ route }) => {
    // Get the params
    const params = route.params.item;

    return (
        <>
            <Header title={"Recipe"} withBack="true" />
            {/* <ScrollView vertical={true} showsVerticalScrollIndicator={false}> */}
              <View style={{ backgroundColor: "#FFEEDB", flex: 1}}>
                  <ion-icon name="bookmark-outline"></ion-icon>
                <View 
                  style={{
                    backgroundColor: "white",
                    flex: 1,
                    marginTop: 180,
                    borderTopLeftRadius: 56,
                    borderTopRightRadius: 56,
                    alignItems: "center"
                  }}>
                    <View
                      style={{ 
                        height: 300, 
                        width: 300,
                        position: "absolute",
                        top: -150, 
                        }}>
                      <Image 
                        source={{ uri: params.image }}
                        resizeMode="cover"
                        alt="Image Data"
                        w="100%"
                        h="100%"
                        borderRadius= "150"
                        >
                      </Image>
                    </View>
                </View >
              </View>
              {/* <Image
                  source={{ uri: params.image }}
                  resizeMode="contain"
                  alt="Image Data"
                  w="full"
                  h="274.3"
              />      
              <Box p={"4"} bg="coolGray.200" >
                  <Text fontSize={"sm"} mb={"4"}>{params.date}</Text>
                  <Heading 
                      lineHeight={30} 
                      fontSize={28} 
                      mb={"5"}
                      >
                          {params.title}
                  </Heading>
                  <Box borderTopColor={"coolGray.300"} borderTopWidth={1}>
                      <Text fontSize={"md"} mt={"5"}>{params.content}</Text>
                  </Box>
              </Box> */}
        {/* </ScrollView> */}
        </>
    );
};

export default NewsDetail;

