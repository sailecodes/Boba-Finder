import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import CustomText from "./custom-text";

type KeyboardType = "default" | "numeric" | "email-address";

interface CustomInputProps {
  header?: string;
  keyboardType: KeyboardType;
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomInput = ({ header, keyboardType, placeholder, secureTextEntry }: CustomInputProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback>
        <>
          {header && (
            <CustomText
              style={styles.header}
              text={header}
            />
          )}
          <TextInput
            style={[styles.input, isInputFocused && styles.focusedInput]}
            keyboardType={keyboardType}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Jakarta-Medium",
    fontSize: 18,
    marginLeft: 15,
  },
  input: {
    fontFamily: "Jakarta",
    fontSize: 16,
    backgroundColor: "#f7f7f7",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
  focusedInput: {
    borderColor: "#FFB38E",
  },
});

export default CustomInput;
