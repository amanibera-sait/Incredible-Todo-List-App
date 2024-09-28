import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Multipleprops = () => {
  return (
    <View>
      <Childcomponent1
        title="Increment"
        count="5"
        onPress={() => alert("Button Clicked")}
      />
    </View>
  );
};

export default Multipleprops;

const Childcomponent1 = ({ title, count, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "coral",
        padding: 8,
        margin: 14,
        color: "white",
        borderRadius: 80,
      }}
      onPress={onPress}
    >
      <Text>
        {title} {count}
      </Text>
    </TouchableOpacity>
  );
};
