import {
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import DescriptionText from "../../components/DescriptionText";
import Icon, { Icons } from "../../components/Icons";
import { Colors } from "../../constants/Colors";
import Calendar from "../dailyTransaction/dailyTransactionComponets/Calendar";
import InputElement from "../profile/profileComponents/InputElement";
import CategoryList from "./createBudgetComponents/CategoryList";

// create a component
function CreateBudget() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      contentContainerStyle={styles.container}
      behavior="position"
    >
      <View style={styles.container}>
        <Calendar
          header="Create Budget"
          type={Icons.Ionicons}
          name="search"
          color="black"
        />
        <View>
          <DescriptionText style={styles.categoryText}>
            Choose Category
          </DescriptionText>
          <CategoryList />
          <View style={styles.inputs}>
            <InputElement
              Label="Budget Name"
              defaultText="Shopping"
              placeholder="Enter Budget Name"
            />
            <View style={styles.iconContainer}>
              <InputElement
                Label="Enter Budget"
                defaultText="$700.00"
                placeholder="Enter Budget Cost"
              />
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.pressed,
                ]}
              >
                <Icon
                  type={Icons.Ionicons}
                  name="arrow-forward"
                  color={Colors.white}
                  size={24}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 18,
    paddingHorizontal: 18,
  },
  inputs: {
    padding: 24,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: 12,
    backgroundColor: Colors.pink,
    borderRadius: 14,
  },
  pressed: {
    opacity: 0.7,
  },
});

//make this component available to the app
export default CreateBudget;
