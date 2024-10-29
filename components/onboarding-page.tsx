import { View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface OnboardingPageProps {
  // source: string;
  primaryText: string;
  secondaryText?: string;
}

const OnboardingPage = ({ primaryText, secondaryText }: OnboardingPageProps) => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        src={"./../assets/images/onboarding-page1-image.png"}
      /> */}
      <Text style={styles.primaryText}>{primaryText}</Text>
      {secondaryText && <Text style={styles.secondaryText}>{secondaryText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    marginTop: 40,
  },

  primaryText: {
    fontSize: 32,
    // fontWeight: "600",
    textAlign: "center",
  },
  secondaryText: {
    color: "gray",
    width: 340,
    fontSize: 18,
    textAlign: "center",
    marginTop: 4,
  },
});

export default OnboardingPage;
