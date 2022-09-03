import { StyleSheet } from "react-native";
import { theme } from "../../../../globalStyles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    minHeight: "100%",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgLogo: {
    width: 165,
    height: 55,
  },
  formContainer: {
    marginBottom: 10,
  },
});
