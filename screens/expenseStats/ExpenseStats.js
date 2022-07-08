import { View, StyleSheet, Dimensions } from "react-native";
import StatsCalendar from "../expenseCategories/expenseCategoriesComponents/StatsCalendar";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { Colors } from "../../constants/Colors";
import DescriptionText from "../../components/DescriptionText";
import TitleText from "../../components/TitleText";
import { Icons } from "../../components/Icons";
import CategoryLogo from "../../components/CategoryLogo";
import * as shape from "d3-shape";
import * as scale from "d3-scale";

// create a component
const data = [50, 30, 100, 50, 75, 50, 75];

const yIndex = [100, 50, 10];
const xIndex = [1, 11, 21];
function ExpenseStats() {
  return (
    <View style={styles.container}>
      <StatsCalendar />
      <View style={styles.graph}>
        <DescriptionText>Net Balance</DescriptionText>
        <TitleText style={styles.title}>$2446.90</TitleText>
        <View style={{ flexDirection: "row" }}>
          <YAxis
            data={yIndex}
            yAccessor={(item) => item.item}
            contentInset={{ top: 10, bottom: 25 }}
            scale={scale.scaleBand}
            spacingInner={0.8}
            spacingOuter={0.1}
            svg={{
              fill: "grey",
              fontSize: 12,
            }}
            // numberOfTicks={3}
            formatLabel={(value) => `${value}k`}
          />
          <LineChart
            style={{ height: 150, width: Dimensions.get("window").width - 100 }}
            gridMin={10}
            gridMax={100}
            numberOfTicks={3}
            data={data}
            curve={shape.curveNatural}
            svg={{
              stroke: Colors.pink,
              strokeWidth: 4,
            }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
        </View>
        <XAxis
          contentInset={{ left: 20, right: 20 }}
          spacingOuter={0.2}
          data={[1, 11, 21]}
          gridMin={1}
          xAccessor={(item) => item.item}
          scale={scale.scaleBand}
          svg={{
            fill: Colors.gray,
            fontSize: 13,
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.incomeContainer}>
          <CategoryLogo
            type={Icons.Ionicons}
            name="arrow-back"
            color="white"
            style={{ backgroundColor: Colors.lightblue }}
          />
          <View>
            <DescriptionText style={styles.description}>Income</DescriptionText>
            <TitleText>$6593.75</TitleText>
          </View>
        </View>
        <View style={styles.incomeContainer}>
          <CategoryLogo
            type={Icons.Ionicons}
            name="arrow-forward"
            color="white"
            style={{ backgroundColor: Colors.red }}
          />
          <View>
            <DescriptionText style={styles.description}>
              Expense
            </DescriptionText>
            <TitleText>$2445.50</TitleText>
          </View>
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graph: {
    margin: 24,
    paddingHorizontal: 8,
    paddingVertical: 18,
    backgroundColor: Colors.white,
    borderRadius: 12,
  },
  title: {
    paddingVertical: 12,
  },
  bottomContainer: {
    flexDirection: "row",
    marginHorizontal: 12,
    justifyContent: "space-between",
  },
  incomeContainer: {
    paddingHorizontal: 30,
    paddingVertical: 24,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 12,
    height: 180,
    justifyContent: "space-between",
  },
  description: {
    marginVertical: 6,
  },
});

//make this component available to the app
export default ExpenseStats;
