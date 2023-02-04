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
  },
  {
    id: 2,
    restaurant: "Jaggi",
    dish: "Banana Shake",
    duration: "30 days",
    price: 900,
    discountedPrice: 675,
    percentage: 25,
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
