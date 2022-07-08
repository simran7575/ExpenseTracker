import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabBar from "./components/BottomTabBar";

export default function App() {
  return (
    //<Text>Hello world</Text>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabBar />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
