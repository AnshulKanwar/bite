import { StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Pill from "./Pill";

const Rating = ({ rating }) => {
  return (
    <Pill bg="#00AA13" style={styles.container}>
      <Text style={styles.text}>{rating}</Text>
      <Feather name="star" size={11} color="white" />
    </Pill>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 11,
    marginRight: 4,
  },
});

export default Rating;
