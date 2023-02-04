import { View, Text, StyleSheet } from "react-native";

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Your Orders will be displayed here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default OrdersScreen;
