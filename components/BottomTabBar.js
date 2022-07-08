import { useRef, useEffect } from "react";
import { StyleSheet, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DailyTransaction from "../screens/dailyTransaction/DailyTransaction";
import ExpenseStats from "../screens/expenseStats/ExpenseStats";
import ExpenseCategories from "../screens/expenseCategories/ExpenseCategories";
import CreateBudget from "../screens/createBudget/CreateBudget";
import Profile from "../screens/profile/Profile";
import * as Animatable from "react-native-animatable";
import Icon, { Icons } from "./Icons";
import { Colors } from "../constants/Colors";

const Tab = createBottomTabNavigator();
const TabScreensArray = [
  {
    name: "DailyTransaction",
    component: DailyTransaction,
    iconType: Icons.MaterialCommunityIcons,
    icon: "calendar",
  },
  {
    name: "ExpenseStats",
    component: ExpenseStats,
    iconType: Icons.Ionicons,
    icon: "stats-chart",
  },
  {
    name: "CreateBudget",
    component: CreateBudget,
    iconType: Icons.Ionicons,
    icon: "add",
  },
  {
    name: "ExpenseCategories",
    component: ExpenseCategories,
    iconType: Icons.MaterialCommunityIcons,
    icon: "wallet",
  },
  {
    name: "Profile",
    component: Profile,
    iconType: Icons.MaterialCommunityIcons,
    icon: "account-circle",
  },
];

function BottomTabBar() {
  function TabBarButton(props) {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const animate1 = {
      0: { scale: 0.5, rotate: "0deg" },
      1: { scale: 1.2, rotate: "360deg" },
    };
    const animate2 = {
      0: { scale: 1.2 },
      1: { scale: 1 },
    };

    const circle1 = {
      0: { scale: 0 },
      0.3: { scale: 0.3 },
      0.5: { scale: 0.5 },
      0.8: { scale: 0.8 },
      1: { scale: 1 },
    };
    const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
        circleRef.current.animate(circle1);
      } else {
        viewRef.current.animate(animate2);
        circleRef.current.animate(circle2);
      }
    }, [focused]);
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Animatable.View style={styles.btn} ref={viewRef} duration={400}>
          <Animatable.View
            ref={circleRef}
            duration={400}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Colors.pink,
              borderRadius: 25,
            }}
          />
          <Icon
            type={item.iconType}
            name={item.icon}
            color={focused ? "white" : Colors.gray}
          />
        </Animatable.View>
      </Pressable>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF3378",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: "8%",
        },
      }}
    >
      {TabScreensArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarButton: (props) => <TabBarButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabBar;
