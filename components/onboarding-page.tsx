import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface OnboardingPageProps {
  primaryText: string;
  secondaryText: string;
}

const OnboardingPage = ({ primaryText, secondaryText }: OnboardingPageProps) => {
  return (
    <View style={styles.container}>
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
    marginBottom: 50,
  },
  primaryText: {
    fontSize: 32,
    fontWeight: 600,
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
