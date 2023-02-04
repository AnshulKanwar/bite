import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Menu from "../components/Menu";
import { useNavigation } from "@react-navigation/native";

// const name = "WrapChick";
const RestaurantScreen = ({ route }) => {
  const { name, image } = route.params
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.dark}>
        <Image style={styles.image} source={{
            uri: image
          }} 
        />
      </View>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="#dde0e5" />
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
    color: "#dde0e5",
    fontSize: 16,
  },
  image: {
    height: 300,
    opacity: 0.5
    // backgroundColor: "#c3a587",
  },
  dark: {
    backgroundColor: "black"
  },
  content: {
    marginTop: 40,
    marginHorizontal: 30,
    height: 400,
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    top: -120,
    color: "#dde0e5"
  },
});

export default RestaurantScreen;
