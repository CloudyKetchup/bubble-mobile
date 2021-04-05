import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    height: "100%",
  },
  list: {
    height: "88%",
    width: "100%",
  },
  listItem: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    padding: 40
  },
  cardTitle: {
    color: "white",
    fontSize: 24,
    fontFamily: "Quicksand-bold"
  },
  cardDescription: {
    marginTop: 20,
    color: "white",
    fontSize: 18
  },
  bplus: {
    margin: 20,
    height: 50,
    width: 130
  }
});

export default styles;