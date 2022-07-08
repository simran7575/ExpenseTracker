import { useState } from "react";
import { View, StyleSheet } from "react-native";
import WeekItem from "./WeekItem";
import { daysData } from "../../../data/DaysData";

// create a component
function WeekDaysList({ data, style }) {
  const [isFocused, setIsFocused] = useState(1);
  const changeFocus = (pressedIndex) => {
    setIsFocused(pressedIndex);
  };
  return (
    <View style={styles.list}>
      {data.map((item) => {
        return (
          <WeekItem
            key={item.id}
            id={item.id}
            item={item}
            focusedIndex={isFocused}
            onPress={changeFocus}
            style={style}
          />
        );
      })}
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

//make this component available to the app
export default WeekDaysList;
