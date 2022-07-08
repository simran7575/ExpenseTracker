import { View, Text, StyleSheet } from "react-native";

function TitleText({ children, style, textstyle }) {
  return (
    <View style={style}>
      <Text style={[styles.text, { ...textstyle }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TitleText;
