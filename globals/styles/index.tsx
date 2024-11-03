import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import globalColors from "@globals/colors";

export const globalStyles = StyleSheet.create({
  bgBlue: {
    backgroundColor: "#0035A7",
  },

  btnPrimary: {
    backgroundColor: "#0035A7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  btnPrimaryText: {
    color: "#fff",
    fontFamily: "Montserrat",
  },
  btnPrimaryVibrant: {
    backgroundColor: "#0055FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  btnPrimaryVibrantText: {
    color: "#fff",
    fontFamily: "Montserrat-SemiBold",
  },
  btnSecondary: {
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 0.2,
    borderColor: globalColors.strongBlue,
    backgroundColor: globalColors.buttonBase,
    borderRadius: 10,
    padding: 15,
    fontFamily: "Montserrat",
  },
  pageHeading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: scale(20),
    color: globalColors.vibrantBlue
  },
  pageSubheading: {
    fontFamily: 'Montserrat-Medium',
    fontSize: scale(12),
    color: globalColors.grey3
  }
});

