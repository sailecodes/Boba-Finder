import { SafeAreaView, TouchableOpacity, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import SwiperDot from "@/components/swiper-dot";
import OnboardingPage from "@/components/onboarding-page";
import { onboardingData } from "@/constants/onboarding-data";
import CustomButton from "@/components/custom-button";
import { useRef, useState } from "react";
import CustomText from "@/components/custom-text";
import { colors } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [swiperInd, setSwiperInd] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skipBtnContainer}
        onPress={() => router.navigate("/(auth)/sign-up")}>
        <CustomText
          style={styles.skipBtnText}
          text={"Skip"}
        />
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        dot={<SwiperDot isActive={false} />}
        activeDot={<SwiperDot isActive={true} />}
        loop={false}
        onIndexChanged={(ind) => setSwiperInd(ind)}>
        {onboardingData.map((data) => (
          <OnboardingPage
            key={data.primaryText}
            primaryText={data.primaryText}
            secondaryText={data.secondaryText}
          />
        ))}
      </Swiper>
      <CustomButton
        text={swiperInd === onboardingData.length - 1 ? "Get started" : "Next"}
        onPress={() =>
          swiperInd === onboardingData.length - 1
            ? router.navigate("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        isPrimary={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  skipBtnContainer: {
    alignSelf: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  skipBtnText: {
    fontSize: 14,
  },
});

export default Onboarding;
