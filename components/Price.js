import { Text, StyleSheet } from "react-native";

const Price = ({ price }) => {
  return <Text style={styles.text}>{"₹".repeat(price)}</Text>;
};

const styles = StyleSheet.create({
  text: {
    // color: "#17b01e"
  }
})

export default Price;
