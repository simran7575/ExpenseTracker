//import liraries
import { View, StyleSheet } from "react-native";
import DescriptionText from "../../../components/DescriptionText";
import { Colors } from "../../../constants/Colors";
import PriceContainer from "./PriceContainer";
import RenderProgressBar from "./RenderProgressBar";

// create a component
const CategoryCard = ({ name, spendPrice, totalPrice, barColor }) => {
  let percent = (spendPrice / totalPrice) * 100;
  return (
    <View style={styles.container}>
      <DescriptionText>{name}</DescriptionText>
      <PriceContainer
        spendPrice={spendPrice}
        totalPrice={totalPrice}
        percent={percent}
      ></PriceContainer>
      <RenderProgressBar color={barColor} value={percent} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginHorizontal: 18,
    paddingHorizontal: 24,
    paddingVertical: 18,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
});

//make this component available to the app
export default CategoryCard;
