import { StyleSheet } from "react-native";
import { theme } from "../../../globalStyles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    minHeight: "100%",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imgLogo: {
    width: 165,
    height: 55,
  },
  cardContainer: {
    marginBottom: 20,
    backgroundColor: theme.colors.bgCard,
    borderRadius: 20,
    padding: 20,
  },
  title: {
    marginBottom: 5,
    fontWeight: theme.fontWeights.medium,
  },
  button: {
    marginBottom: 10,
  },
});
