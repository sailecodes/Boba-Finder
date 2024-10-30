import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomInput from "@/components/custom-input";
import CustomText from "@/components/custom-text";
import CustomButton from "@/components/custom-button";
import { colors, icons } from "@/constants";
import { Link, router } from "expo-router";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.navigate("/(auth)/onboarding")}>
        <CustomText
          style={styles.backBtnText}
          text={"Back"}
        />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <CustomText
          style={styles.formHeader}
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
        <CustomButton
          icon={icons.google}
          text="Log in with Google"
        />
        {/*                  */}

        <View style={styles.redirectContainer}>
          <CustomText
            style={styles.redirectText}
            text={"Already have an account?"}
          />
          <TouchableOpacity onPress={() => router.navigate("/(auth)/sign-in")}>
            <CustomText
              style={[styles.redirectText, styles.redirectBtn]}
              text={" Sign in"}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backBtn: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingLeft: 15,
  },
  backBtnText: {
    fontSize: 14,
  },
  formContainer: {
    marginTop: 40,
  },
  formHeader: {
    fontFamily: "Jakarta-Medium",
    fontSize: 28,
    paddingLeft: 15,
  },
  inputContainer: {
    rowGap: 20,
    marginTop: 50,
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
  redirectText: {
    fontSize: 16,
  },
  redirectBtn: {
    color: colors.blue,
  },
});

export default SignUp;
