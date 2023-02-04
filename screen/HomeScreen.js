import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import MutedText from "../components/MutedText";
import RestaurantsList from "../components/RestaurantList";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text style={styles.logo}>Bite.</Text>
      <Text style={styles.greeting}>Good Morning, Kunal</Text>
      <RestaurantsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  greeting: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 15,
    marginBottom: 10,
    color: "#b2b7c6"
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

const style = StyleSheet.create({
  
})

export default HomeScreen;
