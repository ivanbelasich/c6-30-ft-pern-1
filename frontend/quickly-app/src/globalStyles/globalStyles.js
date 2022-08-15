import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from "./theme";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
  },
  title: {
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSize.title,
  },
  title2: {
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSize.title,
  },
  button: {
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  textButton: {
    color: theme.colors.background,
    fontSize: theme.fontSize.button,
    fontWeight: theme.fontWeights.medium,
  },
  normalButton: {
    backgroundColor: theme.colors.secondary,
  },
  disabledButton: {
    backgroundColor: theme.colors.disabled,
  },
  cancelButton: {
    backgroundColor: theme.colors.alert,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: theme.fontSize.subheading,
    fontWeight: theme.fontWeights.medium,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  textError: {
    fontSize: theme.fontSize.caption,
    color: theme.colors.alert,
  },
});

export default globalStyles;
