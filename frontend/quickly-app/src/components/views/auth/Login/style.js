import { StyleSheet } from "react-native";
import Constants from "expo-constants";

// Styles Login

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    marginRight: 10,
    marginLeft: 10,
  },
  image: {
    flex: 1,
  },
  logo: {
    marginTop: 10,
    marginLeft: 100,
    marginBottom: 45,
    height: 65,
    width: 200,
  },
  inputContainer: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    padding: 5,
    marginBottom: 5,
    fontSize: 17,
  },
  direction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
  },
  color: {
    color: "red",
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  marginY: {
    marginTop: 15,
    marginBottom: 20,
  },
  marginX: {
    marginRight: 10,
    marginLeft: 10,
  },
  textRegister: {
    textDecorationLine: "underline",
    fontWeight: "500",
    fontSize: 17,
  },
  textRecuperatePassword: {
    textDecorationLine: "underline",
    fontWeight: "500",
    fontSize: 15,
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
