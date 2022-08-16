import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { theme } from "../../globalStyles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  text: {
    color: theme.colors.background,
    fontSize: theme.fontSize.headline,
    marginLeft: 30,
  },
});
