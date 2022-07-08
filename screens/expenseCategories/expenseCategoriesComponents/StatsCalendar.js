import { StyleSheet } from "react-native";
import { monthsData } from "../../../data/DaysData";
import { Colors } from "../../../constants/Colors";
import { Icons } from "../../../components/Icons";
import Calendar from "../../dailyTransaction/dailyTransactionComponets/Calendar";

// create a component
function StatsCalendar() {
  return (
    <Calendar
      header="Stats"
      type={Icons.Ionicons}
      name="search"
      color="black"
      data={monthsData}
      style={styles.itemContainer}
    />
  );
}

// define your styles
const styles = StyleSheet.create({
  upperContainer: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: Colors.white,
  },
  listContainer: {
    marginTop: 24,
  },
  itemContainer: {
    width: 45,
    height: 30,
    borderRadius: 7,
  },
});

//make this component available to the app
export default StatsCalendar;
