import { StyleSheet, View, Text } from "react-native";
import MutedText from "./MutedText";
import Pill from "./Pill";

const MonthlyPackage = ({ mpackage }) => {
  const { restaurant, dish, duration, price, discountedPrice, percentage } =
    mpackage;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant}</Text>
      <View style={styles.content}>
        <View style={styles.image}></View>
        <View style={styles.right}>
          <View>
            <Text style={styles.dish}>{dish}</Text>
            <MutedText>{duration}</MutedText>
            <View style={styles.allPrice}>
              <Text style={styles.price}>₹{price}</Text>
              <Text>₹{discountedPrice}</Text>
            </View>
          </View>
          <Pill bg="#00AED6">
            <Text style={styles.percentage}>{percentage}% off</Text>
          </Pill>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    marginBottom: 30,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    marginTop: 10,
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "#f0f1fd",
    borderRadius: 20,
    marginRight: 20,
  },
  right: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  dish: {
    fontSize: 18,
    fontWeight: "500",
  },
  allPrice: {
    flexDirection: "row",
    marginVertical: 8,
  },
  price: {
    marginRight: 5,
    textDecorationLine: "line-through",
  },
  percentage: {
    color: "#fff"
  }
});

export default MonthlyPackage;
