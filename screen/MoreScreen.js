import { Pressable, StyleSheet, Text, View } from "react-native";

const MoreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Monthly Packages")} style={styles.feature}>
        <Text style={styles.title}>Monthly Packages</Text>
        <Text>Get monthly packages from the restaurants you like</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Calorie Tracker")} style={styles.feature}>
        <Text style={styles.title}>Calorie Tracker</Text>
        <Text>Track your daily calories consumed in restaurants</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    marginHorizontal: 30,
  },
  feature: {
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 20,
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MoreScreen;
