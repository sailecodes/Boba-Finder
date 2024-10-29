import { View, Text } from "react-native";
import React from "react";

const SwiperDot = ({ isActive }: { isActive: boolean }) => {
  return (
    <View
      style={{
        height: 4,
        width: 35,
        backgroundColor: isActive ? "blue" : "gray",
        marginHorizontal: 2,
      }}
    />
  );
};

export default SwiperDot;
