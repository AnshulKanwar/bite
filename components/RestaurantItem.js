import { Text, View, StyleSheet } from "react-native";
import Offer from "./Offer";
import Rating from "./Rating";

const RestaurantItem = ({ data }) => {
  const { name, serveTimeMin, serveTimeMax, distance, rating, offers } = data;

  return (
    <View style={styles.container}>
      <View styls={styles.left}>
        <View style={styles.image}></View>
      </View>
      <View style={styles.right}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>
          {serveTimeMin} - {serveTimeMax} min • {distance} m
        </Text>
        <View>
          <Offer />
          <Rating />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  left: {},
  right: {
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "#dde0e5",
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  time: {
    marginTop: 8,
    color: "#a3a9b7",
  },
});

export default RestaurantItem;
