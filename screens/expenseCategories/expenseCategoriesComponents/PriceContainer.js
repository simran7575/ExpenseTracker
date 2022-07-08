import { View, Text, StyleSheet } from "react-native";
import DescriptionText from "../../../components/DescriptionText";

// create a component
function PriceContainer({ spendPrice, totalPrice, percent }) {
  spendPrice = (Math.round(spendPrice * 100) / 100).toFixed(2);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
  return (
    <View style={styles.container}>
      <View style={styles.spendContainer}>
        <Text style={styles.spendText}>${spendPrice}</Text>
        <DescriptionText style={styles.price}>{percent}%</DescriptionText>
      </View>
      <View>
        <DescriptionText style={styles.price}>${totalPrice}</DescriptionText>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spendContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  spendText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  price: {
    fontSize: 14,
    marginLeft: 8,
  },
});

//make this component available to the app
export default PriceContainer;
