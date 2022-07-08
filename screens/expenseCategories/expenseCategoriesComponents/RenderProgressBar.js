import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import { ProgressBar } from "react-native-paper";

// create a component
const RenderProgressBar = ({ color, value }) => {
  return (
    <View style={styles.container}>
      <ProgressBar
        style={{ backgroundColor: Colors.lightgray }}
        progress={value / 100}
        color={color}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  progress: {},
  other: {
    height: 4,
    backgroundColor: Colors.lightgray,
  },
});

//make this component available to the app
export default RenderProgressBar;
