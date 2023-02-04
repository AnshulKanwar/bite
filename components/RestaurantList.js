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
    price: "2",
    image: 
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "WrapChick",
    serveTimeMin: 10,
    serveTimeMax: 15,
    distance: 60,
    rating: 4.2,
    offers: [],
    price: "4",
    image:
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    id: 3,
    name: "Sip N Bites",
    serveTimeMin: 10,
    serveTimeMax: 15,
    distance: 65,
    rating: 3.8,
    offers: ["50% off upto ₹100"],
    price: "3",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
  },
  {
    id: 4,
    name: "Ahaar",
    serveTimeMin: 15,
    serveTimeMax: 25,
    distance: 115,
    rating: 4.5,
    offers: ["25% off upto ₹100"],
    price: "2",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
];

const RestaurantList = () => {
  return (
    <FlatList
      style={styles.container}
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem data={item} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RestaurantList;
