import { View, Text, Box, Image, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Inform from "../components/inform";
import Header from "../components/header";

const Recipe = ({ route }) => {
    // Get the params
    const params = route.params.item;
    const [icon, setIcon] = useState("bookmark-outline"); // Inisialisasi dengan icon bookmark

    const handleIconPress = () => {
        // Ubah ikon berdasarkan kondisi sebelumnya
        setIcon((prevIcon) => (prevIcon === "bookmark-outline" ? "bookmark" : "bookmark-outline"));
    };

    return (
        <>
          <Header withBack="true" />
            <View style={{ backgroundColor: "#FFEEDB", flex: 1 }}>
              <TouchableOpacity onPress={handleIconPress}>
                <Ionicons name={icon} size={35} color="#F15A24" marginLeft={320} marginTop={20} />
              </TouchableOpacity>
                <Box
                  style={{
                    backgroundColor: "white",
                    flex: 1,
                    marginTop: 110,
                    borderTopLeftRadius: 56,
                    borderTopRightRadius: 56,
                    alignItems: "center"
                  }}>

                  {/* Recipe Image */}
                    <Box
                      style={{ 
                        height: 250, 
                        width: 250,
                        position: "absolute",
                        top: -140, 
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
                    </Box>
                    
                  {/* Recipe Title */}
                    <Text style={{ 
                      marginTop: 125, 
                      fontSize: 20, 
                      fontWeight: "bold", 
                      marginBottom: 20 }}
                      >
                      {params.title}
                    </Text>

                  <Box style={{ flex: 1}}>

                  <ScrollView>
                      {/* Recipe Time & Cal */}
                      <Box 
                        style={{ 
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "70%",
                        marginLeft: 55,
                      }}>
                          <Inform
                            Text={params.time}
                            Ionicons="time-outline"
                            >
                          </Inform>
                          <Inform
                            Text={params.calories}
                            Ionicons="calculator-outline"
                            >
                          </Inform>
                      </Box>

                    {/* Recipe Ingredients */}
                      <Box style={{alignSelf: "flex-start", marginVertical: 22, marginLeft: 12 }}>
                        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10}}>Ingredients :</Text>
                        {params.ingredients.map((ingredient) => {
                          return (
                            <View style={{ flexDirection: "row", marginVertical: 4, alignItems: "center" }}>
                            <View
                              style={{
                                backgroundColor: "#ED7D31",
                                height: 12,
                                width: 12,
                                borderRadius: 5,
                              }}>
                            </View>
                            <Text style={{ fontSize: 18, marginLeft: 6 }}>{ingredient}</Text>
                          </View>
                          )})}
                      </Box>

                    {/* Recipe Steps */}
                      <Box style={{alignSelf: "flex-start", marginVertical: 22, marginLeft: 12, marginTop:0 }}>
                        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10}}>Recipe Steps :</Text>
                        <Text style={{ fontSize: 18 }}>{params.content}</Text>
                      </Box>

                  </ScrollView>
                  </Box>
                </Box >
            </View>
        </>
    );
};

export default Recipe;

