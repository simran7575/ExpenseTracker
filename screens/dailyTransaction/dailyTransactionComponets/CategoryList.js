import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import { CategoriesList } from "../../../data/CategoriesData";
import CategoryItem from "./CategoryItem";
// create a component

function CategoryList() {
  return (
    <View style={styles.container}>
      {CategoriesList.map((category) => {
        return <CategoryItem key={category.id} item={category} />;
      })}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.priceText}>$1780.00</Text>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginBottom: 70,
  },
  totalContainer: {
    flexDirection: "row",
    marginLeft: 72,
    justifyContent: "space-between",
    marginVertical: 18,
    alignItems: "center",
  },
  totalText: {
    fontSize: 15,
    color: Colors.gray,
    fontWeight: "900",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default CategoryList;
