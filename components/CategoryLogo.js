import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/Colors";
import Icon from "./Icons";

// create a component
function CategoryLogo({ source, style, name, type, color, size = 32 }) {
  return (
    <View style={[styles.imageContainer, { ...style }]}>
      {source && <Image source={source} style={styles.image} />}
      {name && type && (
        <Icon type={type} name={name} color={color} size={size} />
      )}
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.lightgray,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
});

//make this component available to the app
export default CategoryLogo;
