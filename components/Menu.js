import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
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
  const [isOrder, setIsOrder] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <MenuItem
            menu={item}
            toggleOrder={() => setIsOrder((prev) => !prev)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {isOrder &&
      <View style={{ width: '100%', alignItems: "center" }}>
        <View style={styles.placeOrder}>
          <Text style={styles.text}>Place order</Text>
          <Feather name="coffee" size={24} color="white" />
        </View>
      </View>
      }
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
  placeOrder: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ec4747",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    marginRight: 10,
  },
});

export default Menu;
