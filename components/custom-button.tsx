import { Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import React from "react";

interface CustomButtonProps {
  text: string;
  onPress?: React.Dispatch<React.SetStateAction<any>>;
  isPrimary?: boolean;
}

const CustomButton = ({ text, onPress, isPrimary }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isPrimary && styles.primaryBtn]}>
      <Text style={[styles.text, !isPrimary && styles.nonPrimaryBtn]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 100,
  },
  primaryBtn: {
    backgroundColor: "#FFB38E",
  },
  nonPrimaryBtn: {
    color: "black",
  },
  text: {
    color: "white",
    fontSize: 18,
    // fontWeight: "600",
    fontWeight: "bold",
  },
});

export default CustomButton;
