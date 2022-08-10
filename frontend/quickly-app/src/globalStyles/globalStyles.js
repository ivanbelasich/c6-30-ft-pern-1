import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const globalStyles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  colors: {
    primary: "E8C952",
    textPrimary: "#479BB6",
    textSecondary: "DD4E24",
    black: "09060B",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    head: 20,
  },
  fonts: {
    // main: "Agregar fuente"
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
});

export default globalStyles;
