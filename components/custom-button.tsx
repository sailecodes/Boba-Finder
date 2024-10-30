import {
  type TouchableOpacityProps,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomText from "./custom-text";
import { colors } from "@/constants";

type CustomButtonProps = TouchableOpacityProps & {
  icon?: ImageSourcePropType;
  text: string;
  onPress?: React.Dispatch<React.SetStateAction<any>>;
  isPrimary?: boolean;
};

const CustomButton = ({ style, icon, text, onPress, isPrimary }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.container,
        isPrimary && styles.primaryBtn,
        !isPrimary && styles.nonPrimaryBtn,
      ]}>
      {icon && (
        <Image
          style={styles.image}
          source={icon}
        />
      )}
      <CustomText
        style={[styles.primaryText, !isPrimary && styles.nonPrimaryText]}
        text={text}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 100,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
  },
  nonPrimaryBtn: {
    borderWidth: 1,
    borderColor: colors.borderColorNeutral,
  },
  image: {
    width: 20,
    height: 20,
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Jakarta-SemiBold",
  },
  nonPrimaryText: {
    color: colors.black,
  },
});

export default CustomButton;
