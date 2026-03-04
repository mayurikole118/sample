import { StyleSheet } from "react-native";

const gridStyles = StyleSheet.create({
  grid: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginBottom: 12,
  },
  gridCard: {
    height: 130,
    borderRadius: 20,
    padding: 15,
    justifyContent: "space-between",
  },
  gridText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default gridStyles;
