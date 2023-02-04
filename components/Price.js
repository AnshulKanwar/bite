import { Text, StyleSheet } from "react-native";

const Price = ({ price }) => {
  return <Text>{"₹".repeat(price)}</Text>;
};


export default Price;
