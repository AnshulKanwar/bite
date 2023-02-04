import { FlatList, View, Text, StyleSheet } from "react-native";
import PackageList from "../components/PackageList";

const bulkPackages = [
  {
    id: 1,
    name: "Food Hut",
    itemName: "Steam Chicken",
    dayDuration: "30 Days",
    originalPrice: 3000,
    newPrice: 2550,
    discount: "15% off"
  },
  {
    id: 2,
    name: "Jaggi",
    itemName: "Banana Shake",
    dayDuration: "30 Days",
    originalPrice: 900,
    newPrice: 675,
    discount: "25% off"
  },
  {
    id: 3,
    name: "Ahaar",
    itemName: "Amritsari Kulcha",
    dayDuration: "30 Days",
    originalPrice: 1600,
    newPrice: 1350,
    discount: "10% off"
  }
]

const MoreScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>Monthly Packages</Text>
      <FlatList
        data={bulkPackages}
        renderItem={({ item }) => <PackageList data={item} key={item => item.id}/>}
        keyExtractor={item => item.id}>

      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    margin: 20,
    fontSize: 20
  }
})

export default MoreScreen;
