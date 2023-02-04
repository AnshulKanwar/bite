import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Menu from "../components/Menu";
import { useNavigation } from "@react-navigation/native";

const name = "WrapChick";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="#007aff" />
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f1fe",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 70,
    left: 25,
  },
  buttonText: {
    color: "#007aff",
    fontSize: 16,
  },
  image: {
    height: 300,
    backgroundColor: "#c3a587",
  },
  content: {
    marginTop: 40,
    marginHorizontal: 30,
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    top: -120,
  },
});

export default RestaurantScreen;
