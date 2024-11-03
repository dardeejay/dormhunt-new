// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

import InputField from "@/components/InputField";
import { useToast } from "@/hooks/useToast";
import globalColors from "@globals/colors";
import { globalStyles } from "@globals/styles";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
// import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import { scale, verticalScale } from "react-native-size-matters";


export default function UserSignup1() {
  const [togglePassword, setTogglePassword] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  // GoogleSignin.configure({
  //   webClientId:
  //     "781733136981-kvc86jhuhb4to6429uj731ri7fvqj04b.apps.googleusercontent.com",
  //   offlineAccess: true,
  //   scopes: ["profile", "email"],
  // });
  
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.pageHeaderContainer}>
          <Text style={styles.pageHeader}>Sign Up</Text>
          <Text style={styles.pageSubHeading}>
            Create an account to get started
          </Text>
        </View>
        <View style={styles.inputFieldContainer}>
          <InputField
            placeholder="First Name"
            label="Full Name"
            keyboardType="default"
            secureTextEntry={false}
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
            }}
          />
          <InputField
            placeholder="Email"
            label="Email"
            keyboardType="email-address"
            secureTextEntry={false}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <InputField
            placeholder="Password"
            label="Password"
            keyboardType="default"
            secureTextEntry={togglePassword}
            passwordToggle={true}
            onPress={() => {
              setTogglePassword(!togglePassword);
            }}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
        <View style={styles.horizontalLine}>
          <Text style={styles.horizontalLineText}>Or Sign Up With</Text>
        </View>
        <View style={styles.oauthContainer}>
          <TouchableOpacity
            onPress={() => {

            }}
          >
            <Image
              source={require("@/assets/images/google-logo.png")}
              style={{
                width: verticalScale(40),
                height: verticalScale(40),
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {

            }}
          >
            <Image
              source={require("@/assets/images/fb-logo-primary.png")}
              style={{
                width: verticalScale(34),
                height: verticalScale(34),
                alignSelf: "center",
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.TNCContainer}>
          <Text style={styles.TNCText}>
            Creating an account means that you agree with our{" "}
            <Text style={styles.TNCTextHighlight}>Terms and Condition</Text> and{" "}
            <Text style={styles.TNCTextHighlight}>Privacy Policy</Text>
          </Text>
        </View>
        <TouchableHighlight
          style={[globalStyles.btnPrimary, styles.createAccBtn]}
          onPress={() => {}}
          underlayColor={globalColors.strongBlue}
        >
          <Text style={[globalStyles.btnPrimaryText]}>
            {loading ? "Signing Up" : "Create Account"}
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: globalColors.white,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  pageHeaderContainer: {
    marginTop: 35,
  },
  pageHeader: {
    fontSize: 22,
    color: globalColors.strongBlue,
    fontFamily: "Montserrat-SemiBold",
  },
  pageSubHeading: {
    fontSize: 14,
    opacity: 0.9,
    fontFamily: "Montserrat",
  },
  inputFieldContainer: {
    marginTop: scale(20),
  },
  horizontalLine: {
    borderBottomColor: globalColors.strongBlue,
    borderBottomWidth: 1,
    width: "70%",
    marginTop: 40,
    alignSelf: "center",
  },
  horizontalLineText: {
    position: "absolute",
    backgroundColor: globalColors.white,
    paddingHorizontal: 10,
    fontFamily: "Montserrat",
    color: globalColors.strongBlue,
    alignSelf: "center",
    top: -8,
    fontSize: 12,
  },
  oauthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    gap: 30,
  },
  TNCContainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  TNCText: {
    fontFamily: "Montserrat",
    fontSize: 12,
    color: globalColors.strongBlue,
    textAlign: "center",
  },
  TNCTextHighlight: {
    color: globalColors.strongBlue,
    fontFamily: "Montserrat-SemiBold",
  },
  createAccBtn: {
    width: "60%",
    alignSelf: "center",
    marginTop: 40,
  },
});
