import { View, Text, Image, StyleSheet } from "react-native";
import CategoryLogo from "../../../components/CategoryLogo";
import DescriptionText from "../../../components/DescriptionText";
import { Colors } from "../../../constants/Colors";

// create a component
function CategoryItem({ item }) {
  //  const price = item.price.toFixed(2);
  const amount = (Math.round(item.price * 100) / 100).toFixed(2);
  return (
    <View style={styles.container}>
      <CategoryLogo source={item.logo} />
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <DescriptionText>{item.date}</DescriptionText>
        </View>
        <View>
          <Text style={styles.priceText}>${amount}</Text>
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    borderBottomColor: Colors.lightgray,
    borderBottomWidth: 2,
    marginLeft: 12,
    paddingVertical: 16,
  },
  nameText: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  dateText: {
    fontSize: 12,
    color: Colors.gray,
  },
  priceText: {
    color: Colors.green,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});

//make this component available to the app
export default CategoryItem;
