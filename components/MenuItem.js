import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MutedText from "./MutedText";
import Rating from "./Rating";
import Stepper from "./Stepper";

const MenuItem = ({ menu, toggleOrder }) => {
  const { name, timeToPrepareMin, timeToPrepareMax, rating, price } = menu;

  const [number, setNumber] = useState(0);

  const increment = (n) => {
    if (number + n >= 0) {
      toggleOrder()
      setNumber((prev) => prev + n);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text>₹{price}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.stat}>
          <MutedText style={styles.time}>
            {timeToPrepareMin}-{timeToPrepareMax} min
          </MutedText>
          <Rating rating={rating} />
        </View>
        <Stepper number={number} increment={increment} />
      </View>
      <View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontWeight: "500",
  },
  stat: {
    flexDirection: "row",
    marginTop: 6,
  },
  time: {
    marginRight: 10,
  },
  right: {
    alignItems: "flex-end",
  },
});

export default MenuItem;
