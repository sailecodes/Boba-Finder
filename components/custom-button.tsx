import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./custom-text";

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
      <CustomText
        style={[styles.text, !isPrimary && styles.nonPrimaryBtn]}
        text={text}
      />
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
    fontFamily: "Jakarta-SemiBold",
  },
});

export default CustomButton;
