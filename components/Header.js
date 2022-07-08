import { View, StyleSheet } from "react-native";
import TitleText from "./TitleText";
import Icon from "./Icons";

function Header({ children, type, name, color, size }) {
  return (
    <View style={styles.header}>
      <TitleText>{children}</TitleText>
      <Icon type={type} name={name} color={color} size={size ? size : 24} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
