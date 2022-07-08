import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../../constants/Colors";

// create a component
function WeekItem({ item, id, focusedIndex, onPress, style }) {
  let focusedDate = id == focusedIndex;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Pressable onPress={onPress.bind(this, id)}>
        <View
          style={[
            styles.dateContainer,
            { ...style },
            focusedDate && styles.focuseddateContainer,
            !focusedDate && styles.unfocuseddateContainer,
          ]}
        >
          <Text
            style={[
              focusedDate && styles.focusedtext,
              !focusedDate && styles.text,
            ]}
          >
            {item.subtitle}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 11,
  },
  focusedtext: {
    fontSize: 11,
    color: Colors.white,
  },
  dateContainer: {
    marginTop: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  unfocuseddateContainer: {
    borderColor: Colors.lightgray,
    borderWidth: 1,
  },
  focuseddateContainer: {
    backgroundColor: Colors.pink,
  },
});

//make this component available to the app
export default WeekItem;
