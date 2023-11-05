import { Heading, Center, Image, TouchableOpacity, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button";

const Welcome = ({ navigation }) => {
    return (
    <>
        <Image
              source={require("../assets/Welcome.png")}
              alt="Background"
              resizeMode="cover"
              position= "absolute"
              w="100%"
              h="100%"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#F15A24",
            padding: 10,
            borderRadius: 5,
            marginTop: 30,
            width: "100%",
          }}
        >
          <Text color="white">Get Started</Text>
        </TouchableOpacity>
    </>
    );
  };

export default Welcome;