import React from "react";
import { Pressable, Text } from "native-base";

const Button = (props) => {
  return (
    <Pressable
      bg={'#FFEEDC'}
      p={'15px'}
      alignItems="center"
      borderRadius={30}
      onPress={props.onPress}>
      <Text
        fontSize={'16px'}
        textTransform="uppercase"
        fontWeight="bold">
        {props.text}
      </Text>
    </Pressable>
  );
};

export default Button;
