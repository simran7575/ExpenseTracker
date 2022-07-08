import { Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

// create a component
function DescriptionText({ children, style }) {
  return <Text style={[styles.label, { ...style }]}>{children}</Text>;
}

// define your styles
const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    color: Colors.gray,
    fontWeight: "600",
  },
});

//make this component available to the app
export default DescriptionText;
