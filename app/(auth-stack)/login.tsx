// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

import React, { useContext, useState } from "react";
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

import InputField from "../../components/InputField";
import globalColors from "@globals/colors";

import { useToast } from "../../hooks/useToast";

import { globalStyles } from "@globals/styles";

export default function Login({ navigation }: { navigation: any }) {
  const [togglePassword, setTogglePassword] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const { setShowLoader } = useContext(MyContext)

  // GoogleSignin.configure({
  //   webClientId:
  //     "781733136981-kvc86jhuhb4to6429uj731ri7fvqj04b.apps.googleusercontent.com",
  //   offlineAccess: true,
  //   scopes: ["profile", "email"],
  // });
  const { showToast } = useToast();
  

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.pageHeaderContainer}>
          <Text style={styles.pageHeader}>Sign In</Text>
          <Text style={styles.pageSubHeading}>
            Welcome back! Sign in to continue
          </Text>
        </View>
        <View style={styles.inputFieldContainer}>
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
          <Text style={styles.horizontalLineText}>Or Sign in With</Text>
        </View>
        <View style={styles.oauthContainer}>
          <TouchableOpacity
            onPress={() => {
              // onGoogleButtonPress();
            }}
          >
            <Image
              source={require("../../assets/images/google-logo.png")}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // onFacebookButtonPress();
            }}
          >
            <Image
              source={require("../../assets/images/fb-logo-primary.png")}
              style={{ width: 45, height: 45, alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.TNCContainer}>
          <Text style={styles.TNCText}>
            Sign in your Dormhunt account to continue.
          </Text>
        </View>
        <TouchableHighlight
          style={[globalStyles.btnPrimary, styles.createAccBtn]}
          onPress={() => {}}
          underlayColor={globalColors.strongBlue}
        >
          <Text style={[globalStyles.btnPrimaryText]}>
            {loading ? "Signing In" : "Sign In"}
          </Text>
        </TouchableHighlight>
        <View style={styles.TNCContainer}>
          <Text style={styles.TNCText}>
            Don't have an account?{" "}
            <Text
              style={styles.TNCTextHighlight}
              onPress={() => {
                navigation.navigate("UserSignup1");
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
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
    marginTop: 50,
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
