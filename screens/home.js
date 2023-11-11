import { Heading, Image, Text, FlatList, Center, Box } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    return (
    <>
      <Center 
        flex={1}
        bg="#FFEEDC"
      >
        <Heading>Home</Heading>
      </Center>
    </>
    )

};

export default Home;