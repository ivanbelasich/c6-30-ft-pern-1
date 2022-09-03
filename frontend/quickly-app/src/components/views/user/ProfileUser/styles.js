import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from "../../../../globalStyles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    minHeight: "100%",
  },
  dataContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 10,
    backgroundColor: "#479BB622",
    borderRadius: 20,
    marginTop: 150,
  },
  imgContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -100,
    left: 0,
    right: 0,
    bottom: 80,
    marginBottom: 10,
    marginTop: 20,
  },
  imgLogo: {
    width: 120,
    height: 120,
  },
  title: {
    marginBottom: 5,
    fontSize: theme.fontSize.display,
    fontWeight: theme.fontWeights.medium,
    textAlign: "center",
    color: "#225566",
  },
  subtitle: {
    marginBottom: 10,
    fontSize: theme.fontSize.button,
    fontWeight: theme.fontWeights.medium,
    textAlign: "center",
    color: "#225566",
  },
  label: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 16,
  },
  labelText: {
    fontSize: theme.fontSize.headline,
    fontWeight: theme.fontWeights.medium,
    color: "#225566",
    marginLeft: 10,
  },
  cardContainer: {
    marginBottom: 20,
    backgroundColor: theme.colors.bgCard,
    borderRadius: 20,
    padding: 20,
  },
});
