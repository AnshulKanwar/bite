import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MenuItem from "./MenuItem";
import Pill from "./Pill";

const menu = [
  {
    tags:"Veg",
    id: 1,
    name: "Mexican Salsa Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.2,
    price: 75,
  },
  {
    tags:"Veg",
    id: 2,
    name: "Veg Chilli Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.3,
    price: 70,
  },
  {
    tags:"Gluten-Free",
    id: 3,
    name: "Hot Coffee",
    timeToPrepareMin: "2",
    timeToPrepareMax: "3",
    rating: 4.3,
    price: 15,
  },
  {
    tags:"Gluten-Free",
    id: 4,
    name: "Tea",
    timeToPrepareMin: "1",
    timeToPrepareMax: "2",
    rating: 4.3,
    price: 10,
  },
  {
    tags:"Veg",
    id: 5,
    name: "Veg Cheese Burger",
    timeToPrepareMin: "5",
    timeToPrepareMax: "7",
    rating: 4.5,
    price: 45,
  },
  {
    tags:"Veg",
    id: 6,
    name: "Tandoori Paneer Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.2,
    price: 75,
  },
  {
    tags:"",
    id: 7,
    name: "Veg Makhani Wrap",
    timeToPrepareMin: "5",
    timeToPrepareMax: "10",
    rating: 4.3,
    price: 70,
  },
  {
    tags:"",
    id: 8,
    name: "Cold Coffee",
    timeToPrepareMin: "2",
    timeToPrepareMax: "3",
    rating: 4.3,
    price: 30,
  },
  {
    tags:"",
    id: 9,
    name: "Hot Chocolate",
    timeToPrepareMin: "1",
    timeToPrepareMax: "2",
    rating: 4.3,
    price: 30,
  },
  {
    tags:"Non-Veg",
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
  const [msort, setMsort] = useState(0);
  const [mitems, setMitems] = useState(menu)
  useEffect(() => {
    if(msort===1)
    {
      const newList = menu.filter((item) => (item.tags==="Veg"))
      setMitems(newList)
    }
    else if(msort===2)
    {
      const newList = menu.filter((item) => (item.tags==="Non-Veg"))
      setMitems(newList)
    }
    else if(msort===3)
    {
      const newList = menu.filter((item) => (item.tags==="Gluten-Free"))
      setMitems(newList)
    }
  }, [msort])
  const callback = payload => {setMsort(payload)}
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
          callback={callback}
          tag={1}
          style={{ marginRight: 5, flexDirection: "row", alignItems: "center" }}
          bg="white"
        >
          <Feather name="stop-circle" size={20} color="green" />
          <Text style={{ marginLeft: 5 }}>Veg</Text>
        </Pill>
        <Pill
          callback={callback}
          tag={2}
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
          callback={callback}
          tag={3}
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
        data={mitems}
        style={{ marginBottom: 60 }}
        renderItem={({ item }) => {
            return <MenuItem
              menu={item}
              toggleOrder={() => setOrders((prev) => !prev)}
              handleItem={handleItem}
            />
        }}
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
              <Text style={styles.text}>View Cart</Text>
              <Feather name="shopping-cart" size={20} color="white" />
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
    bottom: 80,
    backgroundColor: "#ec4747",
    padding: 10,
    borderRadius: 20,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: { height: 4 },
    shadowOpacity: 0.5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    marginRight: 8,
  },
  flist: {
    marginBottom: 20
  }
});

export default Menu;
