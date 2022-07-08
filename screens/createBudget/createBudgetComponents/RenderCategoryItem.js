import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import CategoryLogo from "../../../components/CategoryLogo";
import TitleText from "../../../components/TitleText";
import { Colors } from "../../../constants/Colors";

// create a component
function RenderCategoryItem({ item, onPress, focusedId }) {
  let isFocused = item.id == focusedId;
  item.name = item.name == "Automobile" ? "Auto" : item.name;
  return (
    <View>
      <Pressable
        style={[styles.container, isFocused && styles.focused]}
        onPress={onPress.bind(this, item.id)}
      >
        <CategoryLogo source={item.logo} />
        <TitleText>{item.name}</TitleText>
      </Pressable>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    paddingHorizontal: 30,
    paddingVertical: 24,
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: 150,
    height: 180,
    justifyContent: "space-between",
    alignItems: "center",
  },
  focused: {
    borderColor: Colors.pink,
    borderWidth: 2,
    borderRadius: 10,
  },
});

//make this component available to the app
export default RenderCategoryItem;
