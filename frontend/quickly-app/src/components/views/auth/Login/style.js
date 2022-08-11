import { StyleSheet } from "react-native";
import Constants from "expo-constants";

// Styles Home

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  color: {
    color: "red",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
  }
});

export default styles;
