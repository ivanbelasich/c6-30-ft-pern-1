import { StyleSheet } from "react-native";
import Constants from "expo-constants";

// Styles notifications

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  color: {
    color: "red",
  },
});

export default styles;
