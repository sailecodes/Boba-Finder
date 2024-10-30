import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "@/components/custom-input";
import CustomText from "@/components/custom-text";
import CustomButton from "@/components/custom-button";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <CustomText
        style={styles.header}
        text={"Create your account"}
      />
      <View style={styles.inputContainer}>
        <CustomInput
          header={"Username"}
          keyboardType={"default"}
          placeholder={"Enter your username"}
        />
        <CustomInput
          header={"Email"}
          keyboardType={"email-address"}
          placeholder={"Enter your email"}
        />
        <CustomInput
          header={"Password"}
          keyboardType={"default"}
          placeholder={"Enter your password"}
          secureTextEntry
        />
        <CustomButton
          style={styles.signUpBtn}
          text={"Sign up"}
          onPress={() => {}}
          isPrimary
        />
      </View>

      <CustomText
        style={styles.divider}
        text={"Or"}
      />

      {/* FIXME: Temporary */}
      <CustomButton text="Log in with Google" />
      {/*                  */}

      <View style={styles.redirectContainer}>
        <CustomText
          style={styles.redirectInitText}
          text={"Already have an account?"}
        />
        <Link href={"/(auth)/sign-in"}>
          <CustomText
            style={styles.redirectText}
            text={" Sign in"}
          />
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 140,
  },
  inputContainer: {
    rowGap: 20,
    marginTop: 40,
  },
  header: {
    fontFamily: "Jakarta-Medium",
    fontSize: 28,
    marginLeft: 15,
  },
  signUpBtn: {
    marginTop: 20,
  },
  divider: {
    fontFamily: "Jakarta-Medium",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  redirectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  redirectInitText: {
    fontSize: 16,
  },
  redirectText: {
    color: "rgb(2, 134, 255)",
    fontSize: 16,
  },
});

export default SignUp;
