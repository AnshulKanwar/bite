import { View, StyleSheet } from "react-native"
import RestaurantList from "../components/RestaurantList"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RestaurantList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});

export default HomeScreen