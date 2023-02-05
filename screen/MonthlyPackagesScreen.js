import { View, FlatList, StyleSheet } from "react-native";
import MonthlyPackage from "../components/MonthlyPackage";

const data = [
  {
    id: 1,
    restaurant: "Food Hut",
    dish: "Steam Chicken",
    duration: "30 days",
    price: 3000,
    discountedPrice: 2550,
    percentage: 15,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3120&q=80"
  },
  {
    id: 2,
    restaurant: "Jaggi",
    dish: "Banana Shake",
    duration: "30 days",
    price: 900,
    discountedPrice: 675,
    percentage: 25,
    image: "https://images.unsplash.com/photo-1542444592-0d5997f202eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80"
  },
  {
    id: 3,
    restaurant: "Eqbal Juice Exchange",
    dish: "Peanut Butter Shake",
    duration: "30 days",
    price: 1500,
    discountedPrice: 1200,
    percentage: 20,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const MonthlyPackagesScreen = () => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={({ item }) => <MonthlyPackage mpackage={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
  }
})

export default MonthlyPackagesScreen;
