import { Text, type TextProps } from "react-native";
import React from "react";

type CustomTextProps = TextProps & {
  text: string;
};

const CustomText = ({ style, text }: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: "Jakarta",
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;
