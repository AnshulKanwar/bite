import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MenuItem from "./MenuItem";
import Pill from "./Pill";

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
  const [orders, setOrders] = useState([]);

  const navigation = useNavigation();

  const handleItem = (id, quantity) => {
    const item = menu.filter((item) => item.id === id)[0];
    const prevOrder = orders.filter((item) => item.id === id);

    if (!prevOrder.length) {
      const item = menu.filter((item) => item.id === id)[0];

      const newOrder = {
        id,
        name: item.name,
        quantity,
        price: item.price * quantity,
      };

      setOrders((prev) => [newOrder, ...prev]);
    } else {
      if (quantity === 0) {
        let newOrders = orders.filter(order => order.id !== id)
        setOrders(newOrders)
      } else {
        let newOrders = orders.map((order) => {
          if (order.id === id) {
            let newOrder = { ...order, quantity, price: item.price * quantity };
            return newOrder;
          } else {
            return order;
          }
        });
        setOrders(newOrders);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <Pill
          style={{ marginRight: 5, flexDirection: "row", alignItems: "center" }}
          bg="white"
        >
          <Feather name="stop-circle" size={20} color="green" />
          <Text style={{ marginLeft: 5 }}>Veg</Text>
        </Pill>
        <Pill
          style={{ marginRight: 5, flexDirection: "row", alignItems: "center" }}
          bg="white"
        >
          <Feather
            style={{ transform: [{ rotateZ: "270deg" }] }}
            name="play-circle"
            size={20}
            color="brown"
          />
          <Text style={{ marginLeft: 5 }}>Non-veg</Text>
        </Pill>
        <Pill
          style={{ marginRight: 5, flexDirection: "row", alignItems: "center" }}
          bg="white"
        >
          <MaterialCommunityIcons
            name="bread-slice-outline"
            size={22}
            color="#f4af47"
          />
          <Text style={{ marginLeft: 5 }}>Gluten-free</Text>
        </Pill>
      </View>
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <MenuItem
            menu={item}
            toggleOrder={() => setIsOrder((prev) => !prev)}
            handleItem={handleItem}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {orders.length > 0 && (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Pressable
            style={styles.placeOrderButton}
            onPress={() => {
              return navigation.navigate("Cart", orders);
            }}
          >
            <View style={styles.content}>
              <Text style={styles.text}>Place order</Text>
              <Feather name="coffee" size={24} color="white" />
            </View>
          </Pressable>
        </View>
      )}
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
  placeOrderButton: {
    position: "absolute",
    bottom: 100,
    backgroundColor: "#ec4747",
    padding: 10,
    borderRadius: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    marginRight: 10,
  },
});

export default Menu;
