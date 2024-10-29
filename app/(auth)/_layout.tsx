import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen />
      <Stack.Screen /> */}
    </Stack>
  );
};

export default AuthLayout;
