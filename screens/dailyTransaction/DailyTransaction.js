import { View, Text, StyleSheet, ScrollView } from "react-native";
import Calendar from "./dailyTransactionComponets/Calendar";
import CategoryList from "./dailyTransactionComponets/CategoryList";
import { Icons } from "../../components/Icons";
import { daysData } from "../../data/DaysData";

// create a component
function DailyTransaction() {
  return (
    <View style={styles.container}>
      <Calendar
        header="Daily Transaction"
        type={Icons.Ionicons}
        name="search"
        color="black"
        data={daysData}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryList />
      </ScrollView>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default DailyTransaction;
