import { View, Text, StyleSheet } from "react-native";

const OrdersScreen = () => {
  return (
    // <View style={styles.container}>
    <View>
      <Text style={styles.heading}>Processing</Text>
      <View style={styles.container}>
        <View style={styles.mainOrder}>
          <Text>Bot</Text>
        </View>
      </View>
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
    fontSize: 30,
    fontWeight: "bold"
  },
  mainOrder: {
    height: 120,
    width: "90%",
    // backgroundColor: "white"
  }
})

export default OrdersScreen;
