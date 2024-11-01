import { View, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./custom-text";
import { colors } from "@/constants";

interface OnboardingPageProps {
  primaryText: string;
  secondaryText?: string;
}

const OnboardingPage = ({ primaryText, secondaryText }: OnboardingPageProps) => {
  return (
    <View style={styles.container}>
      <CustomText
        style={styles.primaryText}
        text={primaryText}
      />
      {secondaryText && (
        <CustomText
          style={styles.secondaryText}
          text={secondaryText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  primaryText: {
    fontFamily: "Jakarta-Medium",
    fontSize: 32,
    textAlign: "center",
  },
  secondaryText: {
    color: colors.gray,
    width: 340,
    fontSize: 18,
    textAlign: "center",
    marginTop: 4,
  },
});

export default OnboardingPage;
