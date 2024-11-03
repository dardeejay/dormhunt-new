import RemoveHeader from "@/components/RemoveHeader";
import { globalStyles } from "@globals/styles";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { scale } from 'react-native-size-matters';

const whiteLogo = require("@assets/images/logos/dormhunt-white.png");
export default function index() {
  const navigation = useNavigation()
  const router = useRouter()
  const [textColor, setTextColor] = useState<string>("#fff");

  return (
    <View style={[styles.container, globalStyles.bgBlue]}>
      <RemoveHeader />
      <Image source={whiteLogo}
        style={{ height: scale(40), width: scale(40), }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          <Text style={{ opacity: 0.4 }}>
            Embark on a journey of discovery with our{" "}
          </Text>
          <Text style={{ opacity: 0.8 }}>innovative DormHunt app!</Text>
        </Text>

        <Text style={[styles.textStyle, { opacity: 0.4, marginTop: 40 }]}>
          Navigating the maze of dormitory options has never been easier.
        </Text>
        <TouchableHighlight
          style={[
            globalStyles.btnSecondary,
            { width: "50%", alignSelf: "center", marginTop: "40%" },
          ]}
          onPressIn={() => {
            setTextColor("#000");
          }}
          onPressOut={() => {
            setTextColor("#fff");
          }}
          onPress={() => {
            router.push('/landing-screen-2')
          }}
          underlayColor={"#fff"}
        >
          <Text style={{ color: textColor }}>Next</Text>
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
    textAlign: "left",
    padding: 20,
    marginTop: 150,
    marginBottom: 150,
  },
  textStyle: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Montserrat-Medium",
  },
  logo: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Montserrat-SemiBold",
  },
});
