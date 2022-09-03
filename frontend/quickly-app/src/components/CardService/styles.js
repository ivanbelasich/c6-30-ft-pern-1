import { StyleSheet } from "react-native";
import { theme } from "../../globalStyles/theme";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    backgroundColor: theme.colors.bgCard,
    overflow: "hidden",
    borderRadius: 20,
    padding: 30,
    marginVertical: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataContainer: {
    width: "85%",
  },
  textContainer: {
    paddingLeft: 5,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    margin: 3,
  },
  title: {
    textTransform: "uppercase",
    fontSize: theme.fontSize.headline,
  },
  button: {
    padding: 3,
  },
  button2: {
    marginVertical: 5,
  },
  textLabel: {
    backgroundColor: theme.colors.background,
    padding: 5,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    overflow: "hidden",
  },
  textSubtitle: {
    fontSize: theme.fontSize.title,
  },
  textButton: {
    fontSize: theme.fontSize.subheading,
    color: theme.colors.background,
  },
});
