import RemoveHeader from "@/components/RemoveHeader";
import { globalStyles } from "@globals/styles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { scale, verticalScale } from 'react-native-size-matters';

const landing2bg = require("@assets/images/DormH.png");
const landingimage2 = require("@assets/images/lsasset2.png");
const whiteLogo = require("@assets/images/logos/dormhunt-white.png");
export default function LandingScreen2() {
  const [textColor, setTextColor] = useState<string>("#fff");
  const router = useRouter()
  return (
    <View style={[styles.container, globalStyles.bgBlue]}>
      <RemoveHeader />

      <Image source={whiteLogo}
        style={{ height: scale(40), width: scale(40), }}
      />

      <ImageBackground
        source={landing2bg}
        style={styles.imgBackground}
        resizeMode="contain"
      >
        <View style={styles.imageContainer}><Image source={landingimage2} style={styles.imgStyle} /></View>

        <View style={styles.textContainer}>
          <Text style={[styles.textStyle]}>
            Welcome to DormHunt – where comfort meets convenience in your quest
            for the perfect dormitory!{" "}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.btnContainer}>
        <TouchableHighlight
          style={[globalStyles.btnSecondary, { width: '50%' }]}
          onPressIn={() => {
            setTextColor("#000");
          }}
          onPressOut={() => {
            setTextColor("#fff");
          }}
          onPress={() => {
            router.push('/login')
          }}
          underlayColor={"#fff"}
        >
          <Text style={{ color: textColor }}>Get Started</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 75,
    paddingHorizontal: 30,

  },
  textContainer: {
    height: "auto",
    justifyContent: "center",
    textAlign: "center",

  },
  textStyle: {
    color: "#fff",
    fontSize: scale(13),
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  logo: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Montserrat-SemiBold",
  },
  btnContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBackground: {
    flex: 1,
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginHorizontal: 'auto'
  },
  imageContainer: {
    width: verticalScale(280),
    padding: 30,
    aspectRatio: 93 / 125,
    marginTop: 20,
  },
  imgStyle: {
    flex: 1, width: null, height: null, resizeMode: 'contain'
  },
});
