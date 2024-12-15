
import {
  StyleSheet,
} from "@react-pdf/renderer";


export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    fontFamily: "Lato",
  },
  text: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  date: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: "Lato Bold",
    fontWeight: "bold",
  },
  bold: {
    fontSize: 10,
    fontFamily: "Lato Bold",
    fontWeight: "bold",
  },
  italic: {
    fontSize: 10,
    fontFamily: "Lato Italic",
  },
  textWrap: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    flexBasis: 0,
    padding: 2,
  },
});