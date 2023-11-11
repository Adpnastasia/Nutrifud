import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F15A24",
        padding: 8,
        alignItems: "center",
        borderRadius: 30,
        width: 200,
      }}
      onPress={props.onPress} // Mengganti "press" menjadi "onPress"
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;