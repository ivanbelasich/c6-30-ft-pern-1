import { StyleSheet } from "react-native";
import Constants from "expo-constants";

// Styles Login

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  logo: {
    marginTop: 20,
    marginLeft: 50,
    height: 50,
    width: "90%",
  },
  container: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  color: {
    color: "red",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#a7a7a7",
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  buttonText: {
    color: "white",
  },
});

export default styles;
