import { FlatList, StyleSheet, Text, View } from "react-native";
import MenuItem from "./MenuItem";

const menu = [
  {
    id: 1,
    name: "Mexican Salsa Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.2,
    price: 75,
  },
  {
    id: 2,
    name: "Veg Chilli Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.3,
    price: 70,
  },
  {
    id: 3,
    name: "Hot Coffee",
    timeToPrepareMin: "2",
    timeToPrepareMax: "3",
    rating: 4.3,
    price: 15,
  },
  {
    id: 4,
    name: "Tea",
    timeToPrepareMin: "1",
    timeToPrepareMax: "2",
    rating: 4.3,
    price: 10,
  },
  {
    id: 5,
    name: "Veg Cheese Burger",
    timeToPrepareMin: "5",
    timeToPrepareMax: "7",
    rating: 4.5,
    price: 45,
  },
  {
    id: 6,
    name: "Tandoori Paneer Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.2,
    price: 75,
  },
  {
    id: 7,
    name: "Veg Makhani Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.3,
    price: 70,
  },
  {
    id: 8,
    name: "Cold Coffee",
    timeToPrepareMin: "2",
    timeToPrepareMax: "3",
    rating: 4.3,
    price: 30,
  },
  {
    id: 9,
    name: "Hot Chocolate",
    timeToPrepareMin: "1",
    timeToPrepareMax: "2",
    rating: 4.3,
    price: 30,
  },
  {
    id: 10,
    name: "Butter Chicken",
    timeToPrepareMin: "5",
    timeToPrepareMax: "7",
    rating: 4.5,
    price: 400,
  },
];

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menu}
        renderItem={({ item }) => <MenuItem menu={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default Menu;
