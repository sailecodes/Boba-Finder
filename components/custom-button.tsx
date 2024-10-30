import { type TouchableOpacityProps, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./custom-text";

type CustomButtonProps = TouchableOpacityProps & {
  text: string;
  onPress?: React.Dispatch<React.SetStateAction<any>>;
  isPrimary?: boolean;
};

const CustomButton = ({ style, text, onPress, isPrimary }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.container,
        isPrimary && styles.primaryBtn,
        !isPrimary && styles.nonPrimaryBtn,
      ]}>
      <CustomText
        style={[styles.primaryText, !isPrimary && styles.nonPrimaryText]}
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
    borderWidth: 1,
    borderColor: "#ebebeb",
  },
  primaryText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Jakarta-SemiBold",
  },
  nonPrimaryText: {
    color: "black",
  },
});

export default CustomButton;
