import { StyleSheet } from "react-native";
import { theme } from "../../globalStyles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  dataContainer: {
    width: "85%",
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    marginHorizontal: 5,
  },
});
