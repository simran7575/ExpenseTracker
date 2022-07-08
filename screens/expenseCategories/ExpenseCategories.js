import { View, Text, StyleSheet } from "react-native";
import StatsCalendar from "./expenseCategoriesComponents/StatsCalendar";
import CategoryCard from "./expenseCategoriesComponents/CategoryCard";
import { Colors } from "../../constants/Colors";

// create a component
function ExpenseCategories() {
  return (
    <View style={styles.container}>
      <StatsCalendar />
      <CategoryCard
        name="Gift"
        spendPrice={2250}
        totalPrice={5000}
        barColor={Colors.secondarygreen}
      />
      <CategoryCard
        name="Automobile"
        spendPrice={3000}
        totalPrice={5000}
        barColor={Colors.red}
      />
      <CategoryCard
        name="Bank"
        spendPrice={4000}
        totalPrice={5000}
        barColor={Colors.lightblue}
      />
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
export default ExpenseCategories;
