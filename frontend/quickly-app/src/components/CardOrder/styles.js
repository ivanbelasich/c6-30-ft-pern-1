import { StyleSheet } from "react-native";
import { theme } from "../../globalStyles/theme";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    backgroundColor: theme.colors.bgCard,
    overflow: "hidden",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 5,
  },
  dataContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: "#B2D2DD",
    overflow: "hidden",
    borderColor: theme.colors.black,
    borderWidth: 1,
  },
  textContainer: {
    paddingRight: 5,
  },
});
