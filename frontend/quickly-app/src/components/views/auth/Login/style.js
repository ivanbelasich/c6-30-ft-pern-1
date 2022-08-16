import { StyleSheet } from "react-native";
import Constants from "expo-constants";

// Styles Login

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  logo: {
    marginTop: 10,
    marginLeft: 110,
    marginBottom: 45,
    height: 65,
    width: 200,
  },
  inputContainer: {
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    marginBottom: 5,
    fontSize: 17,
  },
  container: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  color: {
    color: "red",
  },
  input: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 15,
    marginLeft: 15,
    fontSize: 20,
    padding: 6,
  },
  title: {},
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
