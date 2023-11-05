import { Heading, Center, Text } from "native-base";
import { Header } from "../components";

const Recipe = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header withBack="true" />
      <Center 
      flex={1} 
      bg="#FFEEDC"
      p={"4"}>
        <Heading>Recipe</Heading>
        <Text textAlign={"center"}>{params.title}</Text>
      </Center>
    </>
  );
};

export default Recipe;