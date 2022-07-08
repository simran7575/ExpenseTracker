import { View, StyleSheet, TextInput } from "react-native";
import DescriptionText from "../../../components/DescriptionText";
import { Colors } from "../../../constants/Colors";

// create a component
function InputElement({ Label, defaultText, secure, placeholder = "" }) {
  return (
    <View style={styles.container}>
      <DescriptionText style={styles.label}>{Label}</DescriptionText>
      <TextInput
        style={styles.input}
        defaultValue={defaultText}
        onChangeText={(text) => {}}
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
      />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  label: {
    marginBottom: 6,
    fontWeight: "700",
  },
  input: {
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});

//make this component available to the app
export default InputElement;
