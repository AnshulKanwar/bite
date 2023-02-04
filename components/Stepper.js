import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stepper = () => {
  const [number, setNumber] = useState(0);

  const increment = (n) => {
    if (number + n >= 0) {
      setNumber((prev) => prev + n);
    }
  };

  return (
    <View style={styles.container}>
      {number === 0 ? (
        <Pressable onPress={() => increment(1)}>
          <Text>Add</Text>
        </Pressable>
      ) : (
        <View style={styles.buttonGroup}>
          <Pressable onPress={() => increment(-1)} style={styles.button}>
            <Feather name="minus" size={16} color="black" />
          </Pressable>
          <Text style={styles.number}>{number}</Text>
          <Pressable onPress={() => increment(1)} style={styles.button}>
            <Feather name="plus" size={16} color="black" />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f1fd",
    padding: 8,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    alignSelf: "center",
  },
  number: {
    marginHorizontal: 6,
    width: 10,
    fontSize: 16,
  },
});

export default Stepper;
