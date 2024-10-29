import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import SwiperDot from "@/components/swiper-dot";
import OnboardingPage from "@/components/onboarding-page";
import { onboardingData } from "@/constants/onboarding-data";

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skipBtnContainer}
        onPress={() => router.navigate("/(auth)/sign-in")}>
        <Text style={styles.skipBtnText}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        dot={<SwiperDot isActive={false} />}
        activeDot={<SwiperDot isActive={true} />}
        loop={false}>
        {onboardingData.map((data, ind) => (
          <OnboardingPage
            key={data.primaryText}
            primaryText={data.primaryText}
            secondaryText={data.secondaryText}
          />
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  skipBtnContainer: {
    alignSelf: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  skipBtnText: {
    fontWeight: 600,
  },
});

export default Onboarding;
