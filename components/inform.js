import React from "react";
import { Box, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const Inform = (props) => {
  return (
    <Box style={{ 
        backgroundColor: "#ED7D31", 
        paddingHorizontal: 25, 
        paddingVertical: 10, 
        borderRadius: 8,
        alignItems: "center",
    }}>
        <Ionicons name={props.Ionicons} style={{ fontSize: 50 }}></Ionicons>
        <Text style={{ fontSize: 20 }}>{props.Text}</Text>
    </Box>
  );
};

export default Inform;

