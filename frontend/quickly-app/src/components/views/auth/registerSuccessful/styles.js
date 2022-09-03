import { StyleSheet } from "react-native";

// Style register successful

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
  textSuccessful: {
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    color: "green",
  },
  textMain: {
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    color: "orange",
  },
  textWelcome: {
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    color: "orange",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 120,
  },
  button: {
    width: "100%",
    justifyContent: "flex-end",
    color: "green",
    textDecorationLine: "underline",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 20,
  },
  imageBackground: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
  },
});
