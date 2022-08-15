import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  days: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: 150,
    flexWrap: "wrap",
  },
  day: {
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
});
