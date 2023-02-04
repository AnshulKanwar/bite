import { FlatList, Text, View, StyleSheet } from "react-native";
import RestaurantItem from "./RestaurantItem";

const restaurants = [
  {
    id: 1,
    name: "Jaggi",
    serveTimeMin: 5,
    serveTimeMax: 10,
    distance: 120,
    rating: 4.8,
    offers: ["50% off upto ₹100"],
  },
  {
    id: 2,
    name: "WrapChick",
    serveTimeMin: 10,
    serveTimeMax: 15,
    distance: 60,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Sip N Bites",
    serveTimeMin: 10,
    serveTimeMax: 15,
    distance: 65,
    rating: 3.8,
    offers: ["50% off upto ₹100"],
  },
];

const RestaurantList = () => {
  return (
    <FlatList
      style={styles.container}
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem data={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RestaurantList;
