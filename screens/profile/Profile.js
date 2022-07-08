import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import Header from "../../components/Header";
import { Icons } from "../../components/Icons";
import { Colors } from "../../constants/Colors";
import CircularProgress from "react-native-circular-progress-indicator";
import TitleText from "../../components/TitleText";
import InputElement from "./profileComponents/InputElement";
import DescriptionText from "../../components/DescriptionText";

// create a component
function Profile() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      behavior="position"
    >
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Header type={Icons.Ionicons} name="settings-outline" color="black">
            Profile
          </Header>
          <View style={styles.detailContainer}>
            <View style={styles.progressbar}>
              <CircularProgress
                radius={50}
                value={73.5}
                activeStrokeWidth={7}
                inActiveStrokeWidth={7}
                inActiveStrokeColor={Colors.lightgray}
                showProgressValue={false}
                activeStrokeColor={Colors.pink}
                duration={3000}
              />
            </View>
            <View style={styles.idContainer}>
              <TitleText>Abbie Wilson</TitleText>
              <DescriptionText style={styles.creditText}>
                {" "}
                Credit Score: 73.50
              </DescriptionText>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.bankText}>United Bank Asia</Text>
              <TitleText
                style={styles.price}
                textstyle={{ color: Colors.white }}
              >
                $2440.50
              </TitleText>
            </View>
            <View style={styles.cardButton}>
              <Text style={styles.button}>Update</Text>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <InputElement Label="Email" defaultText="abbie_wilson" />
          <InputElement Label="Date Of Birth" defaultText="04-19-1992" />
          <InputElement Label="Password" defaultText="123456" secure={true} />
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
  upperContainer: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },
  detailContainer: {
    flexDirection: "row",
    paddingVertical: 24,
    alignItems: "center",
  },
  progressbar: {
    flex: 1,
  },
  idContainer: {
    flex: 4,
    alignItems: "center",
  },
  creditText: {
    marginVertical: 6,
  },
  cardContainer: {
    paddingHorizontal: 18,
    paddingVertical: 24,
    backgroundColor: Colors.pink,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bankText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: "700",
  },
  price: {
    marginTop: 8,
  },
  cardButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: Colors.white,
    borderWidth: 1,
  },
  button: {
    color: Colors.white,
    fontWeight: "800",
  },
  details: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
});

//make this component available to the app
export default Profile;
