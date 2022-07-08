import { View, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import WeekDaysList from "./WeekDaysList";
import Header from "../../../components/Header";

function Calendar({ header, type, name, color, data, style }) {
  return (
    <View style={styles.container}>
      <Header type={type} name={name} color={color}>
        {header}
      </Header>
      {data && (
        <View style={styles.weekList}>
          <WeekDaysList data={data} style={style} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },
  weekList: {
    marginTop: 24,
  },
});

export default Calendar;
